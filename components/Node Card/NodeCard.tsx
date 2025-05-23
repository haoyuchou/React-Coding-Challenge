import React, {} from "react";
import { Node } from "../../typings/node.type";
//import Image from "next/image";
import FileIcon from "../SVG/fileIcon";

export interface Props {
  node: Node;
  onClick: () => void;
}

function NodeCard({ node, onClick }: Props) {
  //console.log(node);
  

  return (
    <div onClick={onClick} className="w-60 h-30 p-5 border-1 border-gray-500 rounded-lg mx-5 flex items-center">
      <div className="rounded-md bg-blue-500 w-15 h-12 flex justify-center items-center mr-5">
        <FileIcon width={30} height={22} />
      </div>
      <div>
        <div className="text-xs text-gray-600">Form</div>
        <div className="">{node?.data.name}</div>
      </div>
    </div>
  );
}

export default NodeCard;
