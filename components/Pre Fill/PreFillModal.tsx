import React from "react";
import PreFillMainTask from "./PreFillMainTask";

export interface Props {
  nodeArray: { id: string; name: string }[];
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  field: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const globalData = ["Action Properties", "Client Organization Properties"];

function PreFillModal({
  nodeArray,
  setIsShowModal,
  field,
  setField,
  setIsSelected,
}: Props) {
  //const [field, setField] = useState("");
  return (
    <div className="w-200 border-1 border-gray-600">
      <div className="flex items-center h-15 border-b-1">
        <div className="text-lg mx-5">Select data element to map</div>
      </div>
      <div className="w-100 bg-gray-100 border-r-1 border-gray-200 ">
        {globalData?.map((name, i) => {
          return <PreFillMainTask setField={setField} key={i} name={name} />;
        })}
        {nodeArray?.map((node, i) => {
          return <PreFillMainTask setField={setField} key={i} node={node} />;
        })}
      </div>
      <div>
        <div className="flex justify-end">
          <button
            onClick={() => setIsShowModal(false)}
            className="border-1 rounded-lg px-2"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (field) {
                setIsShowModal(false);
                setIsSelected(true);
              }
            }}
            className="border-1 rounded-lg px-2"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreFillModal;
