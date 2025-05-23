import React from "react";
import { CircleStackIcon, XMarkIcon } from "@heroicons/react/24/outline";

export interface Props {
  placeholder: string;
  onClick: () => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearField: () => void;
}

function PreFillInput({
  placeholder,
  onClick,
  value,
  onChange,
  onClearField,
}: Props) {
  return (
    <div className="w-180 h-15 border-1 border-gray-600 rounded-lg flex items-center mb-5">
      {value ? (
        <div className="ml-5"></div>
      ) : (
        <CircleStackIcon className="h-8 mx-2" />
      )}
      <input
        onClick={onClick}
        placeholder={placeholder}
        className="grow"
        value={value}
        onChange={onChange}
      />
      <XMarkIcon onClick={onClearField} className="h-8 mr-2" />
    </div>
  );
}

export default PreFillInput;
