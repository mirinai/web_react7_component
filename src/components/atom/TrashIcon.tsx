import { FaTrash } from "react-icons/fa";
import { alarm } from "../../utils/util";

export type TrashIconProps = {
  onDelete?: () => void;
};

const TrashIcon = ({ onDelete = alarm }: TrashIconProps) => {
  return <FaTrash onClick={onDelete} />;
};
export default TrashIcon;
