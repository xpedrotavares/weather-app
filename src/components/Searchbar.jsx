import { MagnifyingGlass } from 'phosphor-react'

export function Searchbar() {
  return (
    <form className="lg:mr-60 my-8 lg:my-0 relative block drop-shadow-md">
      <MagnifyingGlass 
        size={18} 
        className="absolute inset-y-0 left-0 flex text-gray-700 items-center mt-[0.70rem] ml-2" 
      />
      <input 
        className="h-10 before:content-search-icon border border-gray-400 rounded-full pl-8" 
        type="text" 
        placeholder="Busque uma cidade..." 
      />
    </form>
  )
}