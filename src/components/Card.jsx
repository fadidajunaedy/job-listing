const Card = (props) => {
    const {
        logo,
        company,
        newpost,
        featured,
        position,
        postedAt,
        contract,
        location,
        role,
        level,
        languages,
        tools,
        filterFunction,
    } = props

    return (
        <div className={`bg-white flex justify-start items-start flex-col sm:flex-row sm:items-center gap-4 rounded-md py-4 px-8 mb-12 sm:mb-6 shadow-lg relative ${featured && "border-l-4 border-[#5ba4a4]"}`}>
            <img src={logo} alt={company} className="rounded-full h-14 sm:h-16 absolute -top-[25px] sm:static" />
            <div className="flex flex-col justify-between items-start gap-2 mt-6 sm:mt-0">
                <div className="flex justify-between items-center gap-2">
                    <h3 className="text-sm font-bold text-[#5ba4a4]">{company}</h3>
                    <div className="font-extrabold text-xs gap-2">
                        {newpost && <span className="bg-[#5ba4a4] text-[0.60rem] text-white leading-3 py-1 px-2 rounded-full mr-2">NEW!</span>}
                        {featured && <span className="bg-[#2c3a3a] text-[0.60rem] text-white leading-3 py-1 px-2 rounded-full mr-2">FEATURED</span>}
                    </div>
                </div>
                <h4 className="text-base font-bold text-[#2c3a3a]">{position}</h4>
                <div className="flex justify-between items-center gap-4 text-xs font-semibold">
                    <span>{postedAt}</span>
                    <span>{contract}</span>
                    <span>{location}</span>
                </div>
            </div>
            <hr />
            <div className="flex justify-start items-center flex-wrap gap-2 sm:ml-auto">
                <button
                    className="btn py-1 px-2 bg-[#eef6f6] text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-[#eef6f6] rounded-md text-sm font-bold"
                    value={role}
                    onClick={() => filterFunction("role", role)}>
                    {role}
                </button>
                <button
                    className="btn py-1 px-2 bg-[#eef6f6] text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-[#eef6f6] rounded-md text-sm font-bold"
                    value={level}
                    onClick={() => filterFunction("level", level)} >
                    {level}
                </button>
                {languages.map((language, index) => (
                    <button
                        key={index}
                        className="btn py-1 px-2 bg-[#eef6f6] text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-[#eef6f6] rounded-md text-sm font-bold"
                        value={language}
                        onClick={() => filterFunction("languages", language)}>
                        {language}
                    </button>
                ))}
                {tools.map((tool, index) => (
                    <button
                        key={index}
                        className="btn py-1 px-2 bg-[#eef6f6] text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-[#eef6f6] rounded-md text-sm font-bold"
                        value={tool}
                        onClick={() => filterFunction("tools", tool)}>
                        {tool}
                    </button>
                ))}

            </div>
        </div>
    )
}

export default Card