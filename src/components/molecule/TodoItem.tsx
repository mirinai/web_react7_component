import { useState } from "react";
import Label from "../atom/Label";
import RoundCheckBox from "../atom/RoundCheckBox";
import TrashIcon from "../atom/TrashIcon";

// const isCheckBox = () => {
//   const result = RoundCheckBox() ? <TrashIcon /> : null;
//   return result;
// };

export type TodoItemProps = {
  contents: string;
  onDelete?: () => void;
};

const TodoItem = ({ contents }: TodoItemProps) => {
  //   const isCheckBox = () => {
  //     const result = RoundCheckBox() ? TrashIcon : ;
  //     return result;
  //   };
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheck = () => setIsChecked((prev) => !prev);

  const obj = {
    RoundCheckBox: {
      isChecked,
      handleCheck,
    },
    label: {
      isChecked,
      contents,
    },
    TrashIcon: {
      //   onDelete,
    },
  };
  return (
    <div className="flex items-center gap-1">
      {/* <RoundCheckBox isChecked={isChecked} handleCheck={handleCheck} /> */}
      <RoundCheckBox {...obj.RoundCheckBox} />
      {/* <Label isChecked={isChecked} /> */}
      <Label {...obj.label} />
      {isChecked && <TrashIcon {...obj.TrashIcon} />}
    </div>
  );
};
export default TodoItem;
