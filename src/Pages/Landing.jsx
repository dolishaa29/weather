import Header from "../Components/Header";
import One from "../Components/One";
import LargeBox from "../Components/LargeBox";
import Smallbox from "../Components/Smallbox";
import Toosmall from "../Components/Toosmall";
import Two from "../Components/Two";
import drop from "../assets/Images/drop.png";
import sun from "../assets/Images/sun.png";
import temp from "../assets/Images/temp.png";
import pressures from "../assets/Images/pressures.png";
import moonn from "../assets/Images/moonn.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatDateTime } from "../utils/time";


const Landing = () => {
  const [API, setAPI] = useState("56fc34e24911fdf8dd16b4a10e8b3321");
  const [API2, setAPI2] = useState("%09aDm7Nn34z0fQfGLAdm2cMprE3sNAsYur");
  const [currentTemp, setCurrentTemp] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [feels_like, setFeels_like] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [visibility, setVisibility] = useState("");
  const [weekForcast, setWeekForcast] = useState();
  const [hourlyForcast, setHourlyForcast] = useState();
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Kolkata",
  };

  const fetchWeatherData = async (cityName) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API}`
    );
    const response1 = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${cityName}&appid=${API}`
    );
    const response2 = await axios.get(
      `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${response1.data.city.id}?apikey=${API2}&details=true&metric=true`
    );
    console.log("response", response.data);
    setCurrentTemp(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setName(response.data.name);
    setImage(response.data.weather[0].icon);
    const sunriseUTC = response.data.sys.sunrise * 1000;
    const sunriseIST = new Date(sunriseUTC);
    const sunriseTimeIST = sunriseIST.toLocaleString("en-IN", options);
    setSunrise(sunriseTimeIST);
    const sunsetUTC = response.data.sys.sunset * 1000;
    const sunsetIST = new Date(sunsetUTC);
    const sunsetTimeIST = sunsetIST.toLocaleString("en-IN", options);
    setSunset(sunsetTimeIST);
    setFeels_like(response.data.main.feels_like);
    setPressure(response.data.main.pressure);
    setHumidity(response.data.main.humidity);
    setVisibility(response.data.visibility);
    setWeekForcast(response1?.data?.list);
    console.log("response1data", response1.data);
    console.log("five", weekForcast);
    setHourlyForcast(response2.data);
    console.log("response2", response2.data);
  };
  console.log(currentTemp);

  return (
    <div className="flex flex-col items-center  h-screen overflow-y-scroll bg-black">
      <Header fetchWeatherData={fetchWeatherData} />

      <div className="flex flex-col md:flex-row bg-black w-full h-full mt-10 justify-between">
      <div className="flex bg-black w-full  md:w-2/5 h-full flex-col  justify-between md:items-start items-center">
        <div className= "bg-black flex w-full  font-sans ms-6 place-items-center text-xl text-white">At Present</div>
          <div className="bg-[#18181b]  w-4/5 md:w-3/5 h-2/6 p-5 ms-5 rounded-lg">
            <div>
              <One
                value={currentTemp}
                image={image}
                locate={name}
                forecast={description}
              />
            </div>
          </div>
          <div className= "bg-black flex w-full font-sans ms-6 items-center text-xl text-white">Five Days Forecast</div>
          <div className="bg-[#18181b] w-full  h-3/6 p-5 ms-5 rounded-lg">
        
            <div className="grid grid-cols-1 md:grid-cols-1 ">
              {weekForcast &&
                [4, 12, 20, 28, 36].map((index) => {
                  const value = weekForcast[index];
                  if (value) {
                    const {date} = formatDateTime(value.dt);
                    return (
                      <Two
                        key={index}
                        image={value.weather[0].icon}
                        value={value.main.temp}
                        date={date}
                      />
                    );
                  }
                  return null;
                })}
            </div>
          </div>
        </div>

        <div className="flex bg-[#18181b]  w-full md:w-2/4 me-5 flex-col justify-between mt-4 md:mt-0  items-center md:items-end ">
         <div className= "bg-black flex w-full h-1/5 font-sans justify-center items-center text-xl text-white">Todays Highlight</div>
          <div className= " bg-[#18181b]  w-full p-2 ">
            <div className="grid grid-cols-2 gap-3 mt-5 px-12 p-5 rounded-md ">
              <LargeBox
                fetchWeatherData={fetchWeatherData}
                title="Sunrise"
                image={sun}
                value={sunrise}
              />
              <LargeBox
                fetchWeatherData={fetchWeatherData}
                title="Sunset"
                image={moonn}
                value={sunset}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-5 px-10">
              <Smallbox
                title="Humidity"
                image={drop}
                value={humidity}
                unit={"%"}
              />
              <Smallbox
                title="Pressure"
                image={pressures}
                value={pressure}
                unit={"hpa"}
              />
              <Smallbox
                title="Visibility"
                image={drop}
                value={visibility}
                unit={"m"}
              />
              <Smallbox
                title="Feels like"
                image={temp}
                value={feels_like}
                unit={"%"}
              />
            </div>
          </div>

          <div className="bg-black w-full flex flex-col h-full justify-between">
          <div className= "bg-black flex w-full h-1/5 font-sans justify-center items-center text-xl text-white">Todays At</div>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 px-10 h-4/5">
              {hourlyForcast?.map((value, index) => {
                const { time } = formatDateTime(value?.EpochDateTime);
                return (
                  <Toosmall
                    image={value?.IconPhrase}
                    value={value?.temperature?.Value}
                    unit={value?.temperature?.Unit}
                    time={time}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
