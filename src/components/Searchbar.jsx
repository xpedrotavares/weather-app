import { MagnifyingGlass } from "phosphor-react";

export function Searchbar() {
  return (
    <form className="my-8 drop-shadow-md lg:mx-auto lg:my-0">
      <MagnifyingGlass
        size={18}
        className="absolute inset-y-0 left-0 mt-[0.70rem] ml-2 flex items-center text-gray-700"
      />
      <input
        className="h-10 rounded-full border border-gray-400 pl-8 before:content-search-icon"
        type="text"
        placeholder="Busque uma cidade..."
      />
    </form>
  );
}
