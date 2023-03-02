import { Sun, SunHorizon, DropHalf, Wind } from "phosphor-react";
import { ChartBar } from "./ChartBar";

export function SecondBoard() {
  let windowsSize = window.innerWidth;

  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-blue-900 py-5 px-5 text-center text-white drop-shadow-xl md:min-h-max lg:min-h-[666px] lg:min-w-[250px] lg:rounded-[35px] lg:rounded-l-none">
      <section className="mx-1 flex items-center md:flex-wrap 2xl:flex-nowrap 2xl:whitespace-nowrap">
        <h2 className=" whitespace-nowrap text-xl md:text-2xl">
          Sao Paulo, sp
        </h2>
        <span className="px-2 text-2xl">|</span>
        <Sun className="mr-2" weight="bold" />
        <p className="text-md font-bold md:text-xl">Ensolarado</p>
      </section>
      <section className="mt-10">
        <div className="flex justify-center">
          <h2 className="text-7xl">30</h2>
          <div className="pt-2">
            <span className="text-2xl  font-light">ºC</span>
          </div>
        </div>
        <p className="flex font-extralight">
          Sensação térmica 32<span className="pt-[2px] text-[10px]">ºC</span>
        </p>
      </section>
      <section className="my-[85px] flex w-72 justify-between font-extralight md:w-96 lg:w-full">
        <section className="text-md flex items-center md:text-lg">
          <DropHalf
            size={windowsSize < 640 ? 20 : 25}
            weight="bold"
            className="mr-2"
          />
          <p>45%</p>
        </section>
        <section className="text-md flex items-center md:text-lg">
          <Wind
            className="mr-2"
            size={windowsSize < 640 ? 25 : 30}
            weight="fill"
          />
          <p>13 km/h</p>
        </section>
        <section>
          <div className="text-md flex items-center md:text-lg">
            <SunHorizon weight="bold" className="mr-2" />
            <p>6:07</p>
          </div>
          <div className="text-md flex items-center md:text-lg">
            <SunHorizon weight="bold" className="mr-2" />
            <p>18:24</p>
          </div>
        </section>
      </section>
      <section className="w-[90%]">
        <p className="mb-2 text-left font-bold">Chances de chuva</p>
        <ChartBar />
      </section>
    </div>
  );
}
