import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { CssBaseline, Grid } from "@material-ui/core";
import List from "../Components/List/List";
import Map from "../Components/Map/Map";
import { getPlacesData, getWeatherData, getCity } from "../api";

const Results = ({type, setType, coordinates, setCoordinates, setShowResults, address, setAddress}) => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [childClicked, setchildClicked] = useState(null);
  const [rating, setRating] = useState(0);
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bounds, setBounds] = useState({});


  useEffect(() => {
   
    const filteredPlaces = places?.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);




  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
/* 
      getWeatherData(coordinates.lat, coordinates.lng).then((data) =>
        setWeatherData(data)
      ); */

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
    console.log(places)
  }, [bounds, type]);


  return (
    <Box
        sx={{
          bgcolor: "#FCEC5A",
          p:0,   
        }}>
    <Grid container spacing={0} style={{ width: "100%" }}>
       

      <Grid item xs={12} md={4}>
        <List
          places={filteredPlaces.length ? filteredPlaces : places}
          childClicked={childClicked}
          isLoading={isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
          setShowResults={setShowResults}
          setCoordinates={setCoordinates}
          coordinates={coordinates}
          setAddress={setAddress} address={address}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={filteredPlaces.length ? filteredPlaces : places}
          setchildClicked={setchildClicked}
          weatherData={weatherData}
        />
      </Grid>
    </Grid>
    </Box>
  );
};

export default Results;