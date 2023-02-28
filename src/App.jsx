import { LeftBoard } from "./components/LeftBoard"
import { RightBoard } from "./components/RightBoard"
import './global.css'

function App() {

  return (
    // <div className="lg:h-screen">
      <div className="w-full md:h-screen flex justify-center items-center" >
        <div className=" gap-0 p-10 lg:grid flex flex-col items-center lg:grid-cols-4 lg:h-full lg:items-center ">

        <div className="md:col-span-3 w-full md:h-[744px] ">
          <LeftBoard />
        </div>
        <div className="md:col-span-1  md:h-[744px] ">
          <RightBoard />
        </div>
        </div>
      {/* 
       */}
      </div>
    // </div>
  )
}

export default App
