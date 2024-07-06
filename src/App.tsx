import { useStore } from "./Store";
import First from "./First";
import TodoItem from "./components/molecule/TodoItem";
import AddButton from "./components/atom/AddButton";
import Body from "./components/organism/Body";
import { useMediaQuery } from "react-responsive";
import SecondTablet from "./SecondTablet";
import SecondPC from "./SecondPC";
function App() {
  const { inc } = useStore();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className="App">
      <div>
        <Body />
        {/* <AddButton /> */}
      </div>
      <div>------------------------------------------------</div>
      <div>
        {isDesktopOrLaptop && <SecondPC />}
        {isTablet && <SecondTablet />}
      </div>
      <div>------------------------------------------------</div>
      <div>
        <h1 className="text-red-300">hello</h1>
      </div>
      <button onClick={inc}>버튼</button>
      <First />
    </div>
  );
}

export default App;
