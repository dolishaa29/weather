const One = ({image,value,locate,forecast}) => {

    return (
        <div className=" w-full h-[60vh] text-white rounded-md justify-end">
                <div className="flex flex-row ">
                <img className="w-25 h-50" src={`http://openweathermap.org/img/w/${image}.png`}/>
            <div className="flex flex-row items-end">
            <p className="text-[3rem]">{value}°</p>
            <p className="text-[2rem]">c</p>
            </div>
            </div>
                <div className="flex flex-row gap-10">
                    <p>{locate}</p>
                    <p>{forecast}</p>
                </div>
            </div>
            
        
    )
}

export default One