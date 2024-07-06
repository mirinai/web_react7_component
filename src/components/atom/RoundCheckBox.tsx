import { alarm } from "../../utils/util";

export type RoundCheckBoxProps = {
  isChecked?: boolean;
  handleCheck?: () => void;
};

const RoundCheckBox = ({
  isChecked = false,
  handleCheck = () => alarm,
}: RoundCheckBoxProps) => {
  return (
    <input
      checked={isChecked}
      onChange={handleCheck}
      className="w-4 h-4 text-purple-500 bg-gray-100 border-gray-400 rounded"
      type="checkbox"
    />
  );
};

export default RoundCheckBox;
