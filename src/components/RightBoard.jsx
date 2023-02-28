import { Sun, SunHorizon, DropHalf, Wind } from "phosphor-react";
import { ChartBar } from "./ChartBar";

export function RightBoard() {
  return (
    <div className="bg-blue-900 flex flex-col items-center lg:min-h-full rounded-xl text-center drop-shadow-xl  justify-center py-5 px-5 lg:rounded-[35px] lg:rounded-l-none text-white">

        <section className="flex md:flex-wrap 2xl:whitespace-nowrap 2xl:flex-nowrap mx-1 items-center">
          <h2 className="text-2xl whitespace-nowrap">Sao Paulo, sp</h2>
          <span className="px-2 text-2xl">|</span>
          <Sun className="mr-2" weight="bold" />
          <p className="text-xl font-bold">Ensolarado</p>
        </section>
        <section className="mt-10">
          <div className="flex justify-center">
            <h2 className="text-7xl">30</h2>
            <div className="pt-2">
              <span className="text-2xl  font-light">ºC</span>
            </div>
          </div>
          <p className="font-extralight flex">Sensação térmica  32<span className="text-[10px] pt-[2px]">ºC</span></p>
        </section>
        <section className="flex justify-between w-full font-extralight my-[85px]">
          <section className="flex items-center">
            <DropHalf size={25} weight="bold" className="mr-2"/>
            <p>45%</p>
          </section>
          <section className="flex items-center">
           <Wind className="mr-2" size={30} weight="fill" />
            <p>13 km/h</p>
          </section>
          <section>
            <div className="flex items-center">
              <SunHorizon weight="bold" className="mr-2" />
              <p>6:07</p>
            </div>
            <div className="flex items-center">
              <SunHorizon weight="bold" className="mr-2" />
              <p>18:24</p>
            </div>
          </section>
        </section>
        <section className='w-[90%]'>
          <p className="text-left font-bold mb-2">Chances de chuva</p>
          <ChartBar />
        </section>
      </div>
   
    );
  }
  