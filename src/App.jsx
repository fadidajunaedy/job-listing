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
    <div className="min-h-screen py-6 px-8">
      <div className="mx-auto max-w-5xl flex flex-wrap gap-4 bg-base-100 shadow-lg px-12 py-6 mb-4">
        {arrayFilters.map((filter, index) => (
          <span key={index} className="inline-flex items-center rounded-md text-sm font-medium bg-red-100 text-gray-800 overflow-hidden">
            <span className="py-1 px-2"> {filter.value}</span>
            <button type="button" onClick={() => removeFilter(filter)} className="flex-shrink-0 bg-blue-600 w-7 h-7 p-1">
              <svg className="text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </span>

        ))}
      </div>
      <div className="mx-auto max-w-5xl">
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
  )
}

export default App
