import { FirstBoard } from "./components/FirstBoard";
import { SecondBoard } from "./components/SecondBoard";
import "./global.css";

function App() {
  return (
    <div className="bg-glass flex h-full w-full flex-wrap lg:h-screen lg:flex-nowrap lg:justify-center lg:px-40">
      <div className="m-2 flex w-full items-center lg:my-0 lg:mr-0 lg:h-full lg:w-[75%] 2xl:w-[55%]">
        <FirstBoard />
      </div>
      <div className="m-2 mt-0 w-full lg:my-0 lg:ml-0 lg:flex lg:h-full lg:w-[25%] lg:items-center">
        <SecondBoard />
      </div>
    </div>
  );
}

export default App;
