import { ArrowDown, ArrowUp, Drop } from "phosphor-react";

export function ForecastList() {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="lg:mt-20 lg:w-full">
      <div className="mb-5 flex flex-wrap justify-center whitespace-nowrap pt-3 text-gray-400 lg:justify-start">
        <form className="rounded-2xl border border-gray-400 p-1" action="">
          <select className="px-2">
            <option value="semana">Essa Semana</option>
            <option value="mes">Esse mês</option>
            <option value="prox-3-meses">Próximos 3 meses</option>
            <option value="prox-5-meses">Próximos 6 meses</option>
          </select>
        </form>
      </div>

      <div className=" w-full lg:block ">
        <table className=" h-[400px] w-full overflow-x-auto overflow-y-auto lg:block lg:min-w-[85%]">
          <tbody className=" mx-auto block h-[400px] w-max overflow-y-auto">
            <tr>
              <th>Dia</th>
              <th className="px-5 md:px-20">Umidade</th>
              <th className="hidden pr-20 md:block lg:pr-0">Tempo</th>
              <th className="lg:pl-20">Max/min</th>
            </tr>

            {data.map((data, idx) => {
              if (data != 20) {
                return (
                  <tr key={idx} className="border-b">
                    <td className="py-2">Domingo</td>
                    <td className=" px-10 py-2 text-center md:px-20">
                      <Drop className="relative mr-1 inline-block" />
                      30%
                    </td>
                    <td className="hidden py-2 pr-20 text-center md:block lg:pr-0">
                      icon
                    </td>
                    <td className=" py-2 pr-3 lg:pl-20">
                      <ArrowDown className="relative mt-[-3px] inline-block text-blue-700" />
                      17&#8451;
                      <ArrowUp className=" relative mt-[-3px] ml-2 inline-block text-red-500 lg:ml-5" />
                      30&#8451;
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
