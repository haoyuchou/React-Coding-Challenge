export interface Props {
  mainTask?: string;
  subtask: string;
  selectedSubTask: string;
  setSelectedSubTask: React.Dispatch<React.SetStateAction<string>>;
  setField: React.Dispatch<React.SetStateAction<string>>;
}
function PreFillSubTask({
  mainTask,
  subtask,
  selectedSubTask,
  setSelectedSubTask,
  setField,
}: Props) {
  return (
    <div
      onClick={() => {
        setSelectedSubTask(subtask);
        setField(`${mainTask}.${subtask}`);
      }}
      className={`mt-3 ${
        selectedSubTask == subtask ? "bg-blue-100" : "bg-gray-100"
      }`}
    >
      {subtask}
    </div>
  );
}

export default PreFillSubTask;
