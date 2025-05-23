import * as React from "react";

export interface Props {
  width: number;
  height: number;
}

function FileIcon({ width, height }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={width}
      height={height}
    >
      <path
        fill="#FFFFFF"
        d="M54 59.11H10a1 1 0 0 1-1-1V5.89a1 1 0 0 1 1-1h32.3a1 1 0 0 1 .7.31l11.7 12.12a1 1 0 0 1 .3.68v40.1a1 1 0 0 1-1 1.01Zm-43-2h42v-38.7L41.88 6.89H11Z"
      />
      <path
        fill="#FFFFFF"
        d="M42.3 19a1 1 0 0 1-1-1V5.89a1 1 0 0 1 2 0V18a1 1 0 0 1-1 1Z"
      />
      <path
        fill="#FFFFFF"
        d="M48 19h-5.7a1 1 0 0 1 0-2H48a1 1 0 0 1 0 2zm-18.91 6.86H17.18a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h11.91a1 1 0 0 1 1 1v11.86a1 1 0 0 1-1 1zm-10.91-2h9.91V14h-9.91zM46.84 34H17.16a1 1 0 1 1 0-2h29.68a1 1 0 0 1 0 2zm0 7.85H17.16a1 1 0 0 1 0-2h29.68a1 1 0 0 1 0 2zm0 7.86H17.16a1 1 0 0 1 0-2h29.68a1 1 0 0 1 0 2z"
      />
    </svg>
  );
}
export default FileIcon;
