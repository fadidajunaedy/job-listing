import Card from "./components/Card"
import Datas from "./data.json"

function App() {
  return (
    <div className="min-h-screen py-6 px-8">
      <div className="container mx-auto max-w-5xl">
        {Datas.map((data) => (
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
            languages={data.languages.map(language => language)}
          />
        ))}
      </div>
    </div >
  )
}

export default App


