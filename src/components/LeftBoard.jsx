import { Searchbar } from "./Searchbar";
import '../global.css'
import logoSvg from '../assets/logo.svg';
import { Chart } from "./Chart";
import { ForecastList } from "./ForecastList";

export function LeftBoard() {
  return (
    <div className="col-span-3  bg-white lg:min-w-full flex flex-col items-center justify-center lg:min-h-full mb-5 py-5 lg:mb-0 drop-shadow-xl lg:py-9 lg:w-9/12 rounded-xl lg:rounded-[35px] lg:rounded-r-none lg:px-16 ">
      <div className="flex flex-col justify-center lg:flex-row items-center">
        <img className="w-48 lg:hidden" src={logoSvg}  />
        <h1 className="text-xl hidden lg:block  mb-2 lg:text-4xl font-bold lg:mr-auto text-blue-900 ">Previsão do Tempo</h1>
        <Searchbar />

      </div>
     

      <ForecastList min='100' />
      


      {/* <Chart /> */}
    </div>
  )
}