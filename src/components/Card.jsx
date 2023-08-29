const Card = (props) => {
    const {
        border,
        logo,
        company,
        newpost,
        featured,
        position,
        postedAt,
        contract,
        location
    } = props

    return (
        <div className="flex justify-start items-start flex-col sm:flex-row sm:items-center gap-4 rounded py-4 px-8 mb-12 sm:mb-6 shadow-lg relative border-l-4 bg-red-200">
            <img src={logo} alt={company} className="rounded-full h-14 sm:h-16 absolute -top-[25px] sm:static" />
            <div className="flex flex-col justify-between items-start gap-2 mt-6 sm:mt-0">
                <div className="flex justify-between items-center gap-2">
                    <h3 className="text-sm font-bold">{company}</h3>
                    <div className="font-extrabold text-xs gap-2">
                        {data.new && <span className="bg-red-600 text-[0.60rem] leading-3 py-1 px-2 rounded-full mr-2">NEW!</span>}
                        {data.featured && <span className="bg-red-600 text-[0.60rem] leading-3 py-1 px-2 rounded-full mr-2">NEW!</span>}
                    </div>
                </div>
                <h4 className="text-base font-bold">{data.position}</h4>
                <div className="flex justify-between items-center gap-4 text-xs font-semibold">
                    <span>{data.postedAt}</span>
                    <span>{data.contract}</span>
                    <span>{data.location}</span>
                </div>
            </div>
            <hr />
            <div className="flex justify-start items-center flex-wrap gap-2 sm:ml-auto">
                {data.languages.map((language, index) => (
                    <button key={index} className="btn py-1 px-2 bg-red-400 rounded-md text-sm font-bold">
                        {language}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Card