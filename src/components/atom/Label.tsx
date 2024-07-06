import { TEXTSTYLE } from "../../styles/textStyle";

export type LabelProps = {
  contents?: string;
  isChecked?: boolean;
};

const Label = ({ contents = "내용 없음", isChecked = false }: LabelProps) => {
  //   const textDone = "line-through text-gray-400";
  //   const textTodo = "font-bold text-gray-900";
  return (
    <span className={isChecked ? TEXTSTYLE.Done : TEXTSTYLE.Todo}>
      {contents}
    </span>
  );
};
export default Label;
