
import { useEffect, useState } from "react"
import axios from 'axios'
import "./App.css"
const Weather = () => {

  const [city, setCity] = useState('')
  const [weather, setweather] = useState(null)
  const [error, setError] = useState(null)
  

  
  const handleWeather = async (e) => {

    e.preventDefault()
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=bd5e378503939ddaee76f12ad7a97608`)
      console.log(res.data)
      setweather(res.data)
      setError(null)
    }
    catch (err) {
      console.log("Error : ", err)
      setError("City not found")
      setweather(null)
    }
  }

  const getDateArray = (startDate, daysToAdd) => {
    const dateArray = [];
    const currentDate = new Date(startDate * 1000); // Convert from seconds to milliseconds
    for (let i = 0; i < daysToAdd; i++) {
      dateArray.push(currentDate.getTime() / 1000); // Convert back to seconds
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
  }

  const renderWeatherData = () => {
    if (!weather) return null;

    const dateArray = getDateArray(weather.list[0].dt, 5);
    const filteredData = weather.list.filter(item => dateArray.includes(item.dt));
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const days = filteredData.map(item => {
      let d = new Date(item.dt_txt.split(" ")[0])
      return d.getDay()
    })
    return (
      <div className="result" >
        <h2>Weather Forecast for {weather.city.name}</h2>

        <div className="fiveday">
          {filteredData.map((item,index) => (
            <div className="list">    
            {item.dt_txt.split(" ")[0]} : {week[days[index]]}: {(Math.round(item.main.temp) * 10) / 10 - 273}°C 
            
          <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img>
          </div>
          ))}
        </div>

      </div>
    );
  }

  return (
    <div className="container" >
      <form className="form-con" onSubmit={handleWeather}>
        <input type="text" value={city} placeholder="Enter the City" onChange={(e) => setCity(e.target.value)} />
        <button type="submit" className="btn">Check</button>
      </form>
      {error && <p>{error}</p>}
      {renderWeatherData()}
    </div>
  );
}

export default Weather;
















// import { useState } from "react";
// import axios from 'axios';
// import "./App.css";

// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);

//   const handleWeather = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.get(https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=bd5e378503939ddaee76f12ad7a97608);
//       setWeather(res.data);
//       setError(null);
//     } catch (err) {
//       console.log("Error : ", err);
//       setError("City not found");
//       setWeather(null);
//     }
//   }


// export default Weather;