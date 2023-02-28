import { ArrowBendDownLeft, ArrowDown, ArrowUp, Drop } from "phosphor-react";
import waterIcon from "../assets/Water.png";
export function ForecastList({ min }) {
  let getMinNumber = parseInt(min);
  return (
 <div className="w-full">
      <div className=" w-[325px] md:w-full pl-5 md:px-5 flex flex-nowrap whitespace-nowrap md:whitespace-wrap xl:whitespace-nowrap lg:flex overflow-scroll lg:overflow-visible text-gray-400 justify-start md:justify-center lg:justify-start lg:mt-20 mb-10 ">
        <button className="inline-block border py-[2px] bg-gray-400 rounded-full px-5 mr-4 text-white ">
          Essa Semana
        </button>
        <button className="hover:transition-all duration-300 inline-block mr-4 px-5 border rounded-full border-gray-500 hover:bg-gray-400 hover:border-gray-400 hover:text-white">
          Esse mês
        </button>
        <button className="hover:transition-all duration-300 inline-block hover:bg-gray-400 hover:border-gray-400 hover:text-white mr-4 px-5 border rounded-full border-gray-500">
          Próximos 3 meses
        </button>
        <button className="hover:transition-all duration-300 inline-block hover:bg-gray-400 hover:border-gray-400 hover:text-white px-5 border rounded-full border-gray-500 ">
          Próximos 6 meses
        </button>
      </div>

      <div className="flex  lg:block w-full">
        <table className="m-5 h-[400px] lg:m-0 w-full lg:block lg:w-full">
          <tbody className=" w-max mx-auto lg:mx-0 h-[400px] block lg:mx-auto overflow-y-auto">
            <tr className="border-b">
              <td className="py-2">Domingo</td>
              <td className=" md:px-20 px-5 py-2">
                <Drop className="relative inline-block mr-1" />
                30%
              </td>
              <td className="hidden md:pr-20 lg:pr-0 md:inline py-2">icon</td>
              <td className="lg:pl-20 py-2 pr-3">
                <ArrowDown className="text-blue-700 relative inline-block mt-[-3px]" />
                17&#8451;
              </td>
              <td className="pl-2">
                <ArrowUp className=" mt-[-3px] relative text-red-500 inline-block" />
                30&#8451;
              </td>
            </tr>
            
           
          </tbody>
        </table>
      </div>
      </div>
    
  );
}
