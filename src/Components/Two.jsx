const Two = ({image,value,day,date}) => {
    console.log("image",image);
    return (
        <div className="w-2/4 md:w-full md:h-full text-white rounded-md justify-start items-center flex flex-col-3 gap-3">
                <img className="w-14 md:w-25 h-14 md:h-50" src={`http://openweathermap.org/img/w/${image}.png`}/>
          
            <p >{value}</p>
               
                    <p>{day}</p>
                    <p>{date}</p>
                </div>
      
            
       
    )
}

export default Two