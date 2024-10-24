import { useState, useEffect } from "react";
const Toosmall = ({ title, image, value, unit, time }) => {
  const [icon, setIcon] = useState("");
    console.log("image",image);
  useEffect(() => {
    switch (image) {
      case "Sunny":
        setIcon("https://cdn-icons-png.flaticon.com/128/1163/1163662.png"); // Replace with actual sunny icon URL
        break;
        case "Mostly sunny":
        setIcon("https://cdn-icons-png.flaticon.com/128/1163/1163662.png"); // Replace with actual sunny icon URL
        break;
      case "Rain":
        setIcon("https://cdn-icons-png.flaticon.com/128/4735/4735072.png"); // Replace with actual rain icon URL
        break;
      case "Intermittent clouds":
        setIcon("https://github.com/user-attachments/assets/0db61266-86dc-4051-9c36-6b8d8c5edc67"); // Replace with actual cloudy icon URL
        break;
        case "Mostly cloudy":
        setIcon("https://github.com/user-attachments/assets/0db61266-86dc-4051-9c36-6b8d8c5edc67"); // Replace with actual cloudy icon URL
        break;
      case "Storm":
        setIcon("https://cdn-icons-png.flaticon.com/128/1146/1146860.png"); // Replace with actual storm icon URL
        break;
      case "Snow":
        setIcon("https://cdn-icons-png.flaticon.com/128/642/642000.png"); // Replace with actual snow icon URL
        break;
      case "Fog":
        setIcon("https://cdn-icons-png.flaticon.com/128/12510/12510049.png"); // Replace with actual fog icon URL
        break;
        case "Clear":
        setIcon("https://cdn-icons-png.flaticon.com/128/12510/12510049.png"); // Replace with actual fog icon URL
        break;
      default:
        setIcon("https://cdn-icons-png.flaticon.com/512/12607/12607703.png"); // Default icon or empty
        break;
    }
  }, [image]); // Run the effect when the image prop changes

  return (
    <div className="w-full h-25 bg-[#18181b]  text-white rounded-md">
      <p className="ms-2 mt-2">{title}</p>
      <div className="flex flex-col gap-3 items-center justify-center mt-3">
        <img className="w-10 h-10" src={icon} alt="weather icon" />
        <div className="flex flex-col gap-1">
          <p>{value}</p>
          <p>{unit}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default Toosmall;