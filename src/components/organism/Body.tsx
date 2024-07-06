import { useState } from "react";
import AddButton from "../atom/AddButton";
import TodoItem, { TodoItemProps } from "../molecule/TodoItem";

const Body = () => {
  const [todoItems, setTodoItems] = useState<TodoItemProps[]>([
    { contents: "soccer" },
    { contents: "baseball" },
    { contents: "game" },
    // {contents:}
  ]);
  const addItem = () => {
    const todo = prompt("오늘 할일 쓰기") || "입력오류";
    setTodoItems((prev) => {
      const newItems = [...prev, { contents: todo }];
      return newItems;
    });
  };
  const deleteItem = (index: number) => {
    setTodoItems((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <div>
      {/* <TodoItem /> */}
      {todoItems.map((v, i) => (
        <TodoItem key={i} {...v} onDelete={() => deleteItem(i)} />
      ))}
      <AddButton handleClick={addItem} />
    </div>
  );
};
export default Body;
