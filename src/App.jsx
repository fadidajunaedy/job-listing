function App() {
  return (
    <div className="bg-blue-600 min-h-screen py-6 px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="flex justify-start items-start flex-col sm:flex-row sm:items-center gap-4 rounded py-4 px-6 border-l-4 bg-red-200">
          <img src="./images/myhome.svg" alt="" className="rounded-full h-16 absolute top-0 sm:static" />
          <div className="flex flex-col justify-between items-start gap-2 mt-6 sm:mt-0">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold">Photosnap</h3>

            </div>
            <h4 className="text-base font-bold">Senior Frontend Developer</h4>
            <div className="flex justify-between items-center gap-4 text-xs font-semibold">
              <span>1d ago</span>
              <span>Full Time</span>
              <span>USA only</span>
            </div>
          </div>
          <hr />
          <div className="flex justify-start items-center flex-wrap gap-2 sm:ml-auto">
            <button className="btn py-1 px-2 bg-red-400 rounded-md text-sm font-bold">
              Javacsript
            </button>
            <button className="btn py-1 px-2 bg-red-400 rounded-md text-sm font-bold">
              Javacsript
            </button>
            <button className="btn py-1 px-2 bg-red-400 rounded-md text-sm font-bold">
              Javacsript
            </button>
            <button className="btn py-1 px-2 bg-red-400 rounded-md text-sm font-bold">
              Javacsript
            </button>
            <button className="btn py-1 px-2 bg-red-400 rounded-md text-sm font-bold">
              Javacsript
            </button>
          </div>
        </div>
        {/* <div className="indicator w-full bg-red-600">
          <span className="indicator-item indicator-start badge badge-secondary rounded-full h-14 w-14 left-10"></span>
          <div className="w-full bg-base-300 place-items-center py-6 px-4">
            <h3 className="text-xl font-bold mt-4">Photosnap</h3>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default App


