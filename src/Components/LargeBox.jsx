
const LargeBox = ({title,image,unit,value}) => {
    console.log(title)
    return (
        <div className="w-full h-39  bg-black text-white rounded-md">
        <p className="ms-2 mt-2">{title}</p>
        <div className="flex flex-row gap-3 items-center justify-center mt-3">
            <img className="w-10 h-10" src={image}/>
            <div className="flex flex-row gap-1">
                <p>{value}</p>
                <p>{unit}</p>
            </div>
        </div>
        
    </div>
    )
}

export default LargeBox