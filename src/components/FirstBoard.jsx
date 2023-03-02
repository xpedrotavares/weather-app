import { Searchbar } from "./Searchbar";
import { ForecastList } from "./ForecastList";

import logoSvg from "../assets/logo.svg";

export function FirstBoard() {
  return (
    <div className="mb-0 flex w-full flex-col items-center rounded-xl bg-white py-5 drop-shadow-xl lg:min-h-[666px] lg:min-w-full lg:rounded-l-[35px] lg:rounded-r-none lg:py-9 lg:px-16">
      <div className="flex w-full flex-col items-center justify-between lg:w-full lg:flex-row">
        <img className="w-48 lg:hidden" src={logoSvg} />
        <h1 className=" mb-2 hidden whitespace-nowrap text-xl font-bold text-blue-900 lg:mr-5 lg:block lg:text-2xl xl:mr-auto xl:text-4xl">
          Previsão do Tempo
        </h1>
        <Searchbar />
      </div>
      <ForecastList />
    </div>
  );
}
