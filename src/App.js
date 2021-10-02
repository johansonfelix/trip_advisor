import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Section1 from "./Components/Section1/Section1";
import Footer from "./Components/Footer/Footer";
import luggage from "./res/images/luggage.png";
import Results from "./Pages/Results";
import { getPlacesData, getWeatherData, getCity } from "./api";

const App = () => {
  const [coordinates, setCoordinates] = useState(null);

  const [type, setType] = useState("hotels");
  const [showResults, setShowResults] = useState(false);
  const [places, setPlaces] = useState([]);
  const [address, setAddress] = useState("");



  useEffect(() => {
 
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
       getCity(latitude, longitude).then(results => console.log(results));
      }
    );
  }, []);




  return (
    <>     
      <Header setShowResults={setShowResults} />
      {!showResults ?  (
        <>
      <img
        className="absolute"
        src={luggage}
        alt="luggage"
        width="446px"
        style={{ paddingLeft: "850px", paddingTop: "410px" }}
      ></img>
      <Hero setShowResults={setShowResults} setCoordinates={setCoordinates} setType={setType} setAddress={setAddress} address={address} />
      <Section1 setCoordinates={setCoordinates} />
      </>
  ) : (
    <> 
    <Results setAddress={setAddress} address={address} type={type} setType={setType} coordinates={coordinates} setCoordinates={setCoordinates} setShowResults={setShowResults}/>
    </>
    
  )}
      <Footer />
    </>
  );
};

export default App;
