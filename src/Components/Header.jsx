import weatherimg from '../assets/Images/weatherimg.jpg'
import { IonIcon } from '@ionic/react';
import { searchOutline ,locationOutline } from 'ionicons/icons';
import { useState } from 'react';
import axios from "axios";
const Header = ({fetchWeatherData}) => {
    const [cityName,setCityName]=useState("")
    const [latitude,setLatitude]=useState()
    const [longitude,setLongitude]=useState()
    const fetchLocation=async() =>{    
        navigator.geolocation.getCurrentPosition((position)=>{
         setLongitude(position.coords.longitude);
         setLatitude(position.coords.latitude); 
        });
        console.log(latitude,longitude);
     
            if (latitude&&longitude) {
                const response =await axios.get(`https://us1.locationiq.com/v1/reverse?key=pk.66396b8c33d928aacba5277e77926d94&lat=${latitude}&lon=${longitude}&format=json`);
                 console.log(response);
                 fetchWeatherData(response.data.address.city);
            }


    }

    return (
        <div className=" flex flex-col-1 md:flex-row w-full h-20 bg-blue-500 text-white border-spacing-4">
            <div className="bg-black h-full w-1/3 ">
            <img src={weatherimg} alt="logo" className='h-full w-full ' ></img>
            </div>
            <div className="bg-black h-full w-1/3 flex flex-row gap-0.5">
            <input onChange={(value)=>setCityName(value.target.value)}className='bg-[#27272a] w-4/5 mt-3 h-10 rounded-s-md px-4' type="text" placeholder="Search"/>
          <button onClick={()=>fetchWeatherData(cityName)} className='bg-[#18181b]  rounded-e-md h-10 mt-3 w-1/5'><IonIcon icon={searchOutline} /></button>  
          </div>
            <div className="flex bg-black h-full w-1/3 justify-center"><button onClick={()=>fetchLocation()} className='bg-[#18181b]  rounded-lg md:h-10 mt-0 md:mt-3 h-[5rem] w-[5rem] md:w-[15rem]'><IonIcon icon={locationOutline} />Current Location
                </button></div> 
        </div>
    )
}   


export default Header;