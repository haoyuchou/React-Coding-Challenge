import React, { useEffect, useState } from "react";
import PreFillInput from "./PreFillInput";
import PreFillModal from "./PreFillModal";

const PreFillInputArray = ["dynamic_checkbox_group", "dynamic_object", "email"];

export interface Props {
  ancestors: { id: string; name: string }[];
}

function PreFillForm({ ancestors }: Props) {
  const [isShowModal, setIsShowModal] = useState(false);
  const [values, setValues] = useState(() => PreFillInputArray.map(() => ""));
  const [field, setField] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    function updateValue() {
      if (isSelected) {
        const newValueArray = [...values];
        newValueArray[
          selectedIndex
        ] = `${PreFillInputArray[selectedIndex]}: ${field}`;
        setValues(newValueArray);
      }
      setIsSelected(false);
    }
    updateValue();
  }, [isSelected, selectedIndex, field, values]);

  console.log("field: ", field);

  return (
    <div>
      <div>
        {PreFillInputArray.map((input, i) => {
          return (
            <PreFillInput
              onClick={() => {
                setIsShowModal(true);
                setSelectedIndex(i);
                setIsSelected(false);
              }}
              key={i}
              placeholder={input}
              value={values[i]}
              onChange={(e) => {
                const newValueArray = [...values];
                newValueArray[i] = e.target.value;
                setValues(newValueArray);
              }}
              onClearField={() => {
                const newValueArray = [...values];
                newValueArray[i] = "";
                setValues(newValueArray);
              }}
            />
          );
        })}
      </div>

      {isShowModal && (
        <div>
          <PreFillModal
            field={field}
            setField={setField}
            setIsShowModal={setIsShowModal}
            nodeArray={ancestors}
            setIsSelected={setIsSelected}
          />
        </div>
      )}
    </div>
  );
}

export default PreFillForm;
