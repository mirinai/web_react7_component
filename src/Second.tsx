import { useStore } from "./Store";

const Second = () => {
  const { count } = useStore();
  return (
    <div className="w-28 h-28 bg-blue-500 text-white text-3xl">{count}</div>
  );
};
export default Second;
