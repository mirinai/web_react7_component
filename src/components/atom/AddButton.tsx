import { alarm } from "../../utils/util";

type AddButton = {
  handleClick?: () => void;
};

const AddButton = ({ handleClick = alarm }: AddButton) => {
  return (
    <div
      onClick={handleClick}
      className="py-5 px-8 rounded-3xl bg-purple-500 text-white font-bold text-lg w-56"
    >
      + New Task
    </div>
  );
};
export default AddButton;
