import { useEffect, useState } from "react"
import Card from "./components/Card"
import Data from "./data.json"

function App() {
  const [arrayFilters, setArrayFilters] = useState([])

  const handleFilterButton = (filterType, value) => {
    const isFilterArray = arrayFilters.some(
      (filter) => filter.type === filterType && filter.value === value
    )

    if (!isFilterArray) {
      setArrayFilters([...arrayFilters, { type: filterType, value }])
    }
  }

  const removeFilter = (filterToRemove) => {
    const updatedFilters = arrayFilters.filter(
      (filter) =>
        !(filter.type === filterToRemove.type && filter.value === filterToRemove.value)
    )
    setArrayFilters(updatedFilters)
  };

  const matchesFilters = (item) => {
    return arrayFilters.every((filter) => {
      if (filter.type === "role") {
        return item.role === filter.value
      }
      if (filter.type === "level") {
        return item.level === filter.value
      }
      if (filter.type === "languages") {
        return item.languages.includes(filter.value)
      }
      if (filter.type === "tools") {
        return item.tools.includes(filter.value)
      }
      return true
    })
  }

  useEffect(() => {
    console.log(arrayFilters);
  }, [arrayFilters])

  return (
    <>
      <header className="w-full px-8 h-24 bg-[url('/images/bg-header-mobile.svg')] sm:bg-[url('/images/bg-header-desktop.svg')] bg-[#5ba4a4]" >
        <div className="relative h-full mx-auto px-8 max-w-5xl ">
          {arrayFilters.length > 0 &&
            <div className="absolute inset-x-0 -bottom-8 rounded-md bg-white mx-auto max-w-5xl flex flex-wrap gap-4 bg-base-100 shadow-lg px-8 py-6">
              {arrayFilters.map((filter, index) => (
                <span key={index} className="inline-flex items-center rounded-md text-sm font-medium bg-[#eef6f6] text-[#5ba4a4] overflow-hidden">
                  <span className="py-1 px-2"> {filter.value}</span>
                  <button type="button" onClick={() => removeFilter(filter)} className="flex-shrink-0 bg-[#5ba4a4] w-7 h-7 p-1">
                    <svg className="text-white font-bold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          }
        </div>
      </header>
      <div className="min-h-screen py-12 px-8">
        <div className={`mx-auto max-w-5xl ${arrayFilters.length > 0 && "mt-14 sm:mt-6"}`}>
          {Data.filter(matchesFilters).map((data) => (
            <Card
              key={data.id}
              logo={data.logo}
              company={data.company}
              newpost={data.new}
              featured={data.featured}
              position={data.position}
              postedAt={data.postedAt}
              contract={data.contract}
              location={data.location}
              role={data.role}
              level={data.level}
              languages={data.languages.map(language => language)}
              tools={data.tools.map(tool => tool)}
              filterFunction={handleFilterButton}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
