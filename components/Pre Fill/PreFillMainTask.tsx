import React, { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import PreFillSubTask from "./PreFillSubTask";
import { form } from "../../lib/form";

export interface Props {
  node?: { id: string; name: string };
  name?: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
}

function PreFillMainTask({ node, name, setField }: Props) {
  //console.log("form: ", form);
  const [isSubTaskShowed, setIsSubTaskShowed] = useState(false);
  const [selectedSubTask, setSelectedSubTask] = useState("");

  return (
    <div>
      <div
        className={`flex items-center rounded-md ${
          isSubTaskShowed ? "bg-blue-100" : "bg-white"
        }`}
      >
        {isSubTaskShowed ? (
          <ChevronDownIcon
            onClick={() => setIsSubTaskShowed(false)}
            className="h-5 mr-2"
          />
        ) : (
          <ChevronRightIcon
            onClick={() => setIsSubTaskShowed(true)}
            className="h-5 mr-2"
          />
        )}
        <div>{node ? node?.name : name}</div>
      </div>
      <div className="ml-10">
        {isSubTaskShowed &&
          form.map((subtask, i) => {
            return (
              <PreFillSubTask
                setField={setField}
                mainTask={node ? node?.name : name}
                selectedSubTask={selectedSubTask}
                setSelectedSubTask={setSelectedSubTask}
                key={i}
                subtask={subtask}
              />
            );
          })}
      </div>
    </div>
  );
}

export default PreFillMainTask;
