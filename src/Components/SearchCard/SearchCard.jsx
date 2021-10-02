import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import OptionButton from "./OptionButton";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";
import FlightButton from "./FlightButton";
import "./style.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import RoomIcon from "@mui/icons-material/Room";

import { Autocomplete } from "@react-google-maps/api";
import useStyles from "./style";



const SearchCard = ({ setCoordinates, setShowResults, setType, setAddress, address}) => {
  const [isSearchFlights, setIsSearchFlights] = useState(false);
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [isOneWay, setIsOneWay] = useState(false);
  const [departValue, setDepartValue] = useState(null);
  const [returnValue, setReturnValue] = useState(null);
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  const [isSearchHotels, setIsSearchHotels] = useState(false);
  const [isSearchRestaurants, setIsSearchRestaurants] = useState(false);
  const [isSearchAttractions, setIsSearchAttractions] = useState(false);
  const [autoComplete, setAutoComplete] = useState(null);
  const [input, setInput] = useState("");
  const onLoad = (autoC) => setAutoComplete(autoC);
  const onPlaceChanged = () => {
    if (autoComplete !== null) {
      console.log(autoComplete.getPlace());
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
    setAddress(autoComplete.getPlace().formatted_address);
   
    setCoordinates({ lat, lng });

    handleSearchSubmit();
  };

  const onTabClick = (evt) => {
    let tab = evt.currentTarget;
    let line = document.querySelector(".line");
    line.style.left = tab.offsetLeft + "px";
    line.style.width = tab.clientWidth + "px";
  };

  const toggleRoundTripOn = (evt) => {
    console.log(isRoundTrip);
    if (!isRoundTrip) {
      setIsRoundTrip(true);
      const roundTripButton = document.querySelector(".roundTrip");
      const oneWayTripButton = document.querySelector(".oneWay");

      roundTripButton.style.borderBottom = "2px solid #000000";
      roundTripButton.style.fontWeight = "bold";

      oneWayTripButton.style.borderBottom = "none";
      oneWayTripButton.style.fontWeight = "normal";
      setIsOneWay(false);
    }
  };

  const toggleOneWayOn = (evt) => {
    if (!isOneWay) {
      setIsOneWay(true);
      const roundTripButton = document.querySelector(".roundTrip");
      const oneWayTripButton = document.querySelector(".oneWay");
      const returnInput = document.querySelector(".return");
      console.log(returnInput);
      returnInput.disabled = true;
      console.log(returnInput.disabled);
      oneWayTripButton.style.borderBottom = "2px solid #000000";
      oneWayTripButton.style.fontWeight = "bold";

      roundTripButton.style.borderBottom = "none";
      roundTripButton.style.fontWeight = "normal";
      setIsRoundTrip(false);
    }
  };

  const flightSearchToggleOn = (evt) => {
    if (!isSearchFlights) {
      setIsSearchHotels(false);
      setIsSearchRestaurants(false);
      setIsSearchAttractions(false);
      setIsSearchFlights(true);
      setType('flights');
    }
  };

  const flightSearchToggleOff = (evt) => {
    if (isSearchFlights) setIsSearchFlights(false);
  };

  const hotelSearchToggleOn = () => {
    setIsSearchHotels(true);
    setIsSearchRestaurants(false);
    setIsSearchAttractions(false);
    setIsSearchFlights(false);
    setType('hotels')
  };
  const restaurantSearchToggleOn = () => {
    setIsSearchHotels(false);
    setIsSearchRestaurants(true);
    setIsSearchAttractions(false);
    setIsSearchFlights(false);
    setType('restaurants')
  };
  const attractionSearchToggleOn = () => {
    setIsSearchHotels(false);
    setIsSearchRestaurants(false);
    setIsSearchAttractions(true);
    setIsSearchFlights(false);
    setType('attractions');
  };
  const handleSearchInput = (evt) => {
    setInput(evt.target.value);

    console.log(input, input.length);
    if (input.length === 0) {
      setIsSearchEmpty(true);
    } else {
      setIsSearchEmpty(false);
    }
  };

  const handleSearchSubmit = (evt) => {

    setShowResults(true);
    
  };

  useEffect(() => {
    let searchButton = document.querySelector(".searchButton");
    if (isSearchEmpty) {
      searchButton.innerHTML = "Search near me";
    } else {
      searchButton.innerHTML = "Search";
    }
  }, [isSearchEmpty]);

  useEffect(() => {
    let tab = document.querySelector(".initial");
    let line = document.querySelector(".line");
    line.style.left = tab.offsetLeft + "px";
    line.style.width = tab.clientWidth + "px";
    hotelSearchToggleOn();

     }, []);

  useEffect(() => {
    if (isSearchFlights) {
      let roundTripButton = document.querySelector(".roundTrip");
      console.log(roundTripButton);
      roundTripButton.style.borderBottom = "2px solid #000000";
      roundTripButton.style.fontWeight = "bold";
      setIsRoundTrip(true);
      setIsOneWay(false);
      setIsSearchEmpty(true);
    }
  }, [isSearchFlights]);

  useEffect(() => {
    if (isSearchHotels) {
      let searchInput = document.querySelector(".searchInput").children[0];
      searchInput.placeholder = "Where to? Hotels near me?";
    }
  }, [isSearchHotels]);
  useEffect(() => {
    if (isSearchRestaurants) {
      let searchInput = document.querySelector(".searchInput").children[0];
      searchInput.placeholder = "Where to? Restaurants near me?";
    }
  }, [isSearchRestaurants]);

  useEffect(() => {
    if (isSearchAttractions) {
      let searchInput = document.querySelector(".searchInput").children[0];
      searchInput.placeholder = "Where to? Things to do near me?";
    }
  }, [isSearchAttractions]);

  return (
    <Paper
      sx={{
        margin: "auto",
        maxWidth: 1200,
        height: 350,
        flexGrow: 1,
        borderRadius: 0,
        backgroundColor: "rgba(255,255,255,0.8)",
      }}
      elevation={0}
    >
      <Grid container>
        <Grid item xs={12} position sx={{ position: "relative" }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={25}
          >
            <OptionButton
              flightSearchToggleOff={flightSearchToggleOff}
              onTabClick={onTabClick}
              type={"hotels"}
              hotelSearchToggleOn={hotelSearchToggleOn}
            />
            <OptionButton
              flightSearchToggleOff={flightSearchToggleOff}
              onTabClick={onTabClick}
              type={"restaurants"}
              restaurantSearchToggleOn={restaurantSearchToggleOn}
            />
            <OptionButton
              flightSearchToggleOff={flightSearchToggleOff}
              onTabClick={onTabClick}
              type={"attractions"}
              attractionSearchToggleOn={attractionSearchToggleOn}
            />
         {/*    <OptionButton
              onTabClick={onTabClick}
              flightSearchToggle={flightSearchToggleOn}
              type={"flights"}
            /> */}
          </Stack>
          <div className="line"></div>
          <Divider />
        </Grid>

        <Grid
          container
          item
          xs={12}
          marginTop="20px"
          justifyContent="center"
          alignItems="center"
        >
          {!isSearchFlights ? (
            <>
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 900,
                    height: 50,
                    border: "1px solid rgba(0,0,0,0.2)",
                    borderRadius: "0",
                    boxShadow: "none",
                    marginTop: "30px",
                  }}
                >
                  <div
                    style={{ padding: "10px", color: "black" }}
                    aria-label="menu"
                  >
                    <SearchIcon />
                  </div>

                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Where to?"
                    inputProps={{ "aria-label": "Where to?" }}
                    onChange={handleSearchInput}
                    className="searchInput"                    
                  />
                </Paper>
              </Autocomplete>

              <Button
                variant="contained"
                sx={{
                  marginLeft: "20px",
                  height: "50px",
                  width: " 160px",
                  borderRadius: 0,
                  backgroundColor: "#FF5A5A",
                  marginTop: "30px",
                }}
                className="searchButton"
                onClick={handleSearchSubmit}
              >
                Search near me
              </Button>
            </>
          ) : (
            <Grid
              container
              sx={{ marginLeft: "20px ", paddingTop: 2 }}
              spacing={2}
            >
              <Grid item xs={12}>
                <Stack direction="row" sx={{ paddingLeft: "30px" }}>
                  <FlightButton
                    className="roundTrip"
                    onClick={toggleRoundTripOn}
                  >
                    Round Trip
                  </FlightButton>
                  <FlightButton className="oneWay" onClick={toggleOneWayOn}>
                    One Way
                  </FlightButton>
                </Stack>
              </Grid>
              <Grid item xs={12} sx={{ marginTop: 2 }}>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Paper
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 300,
                      height: 50,
                      border: "1px solid rgba(0,0,0,0.2)",
                      borderRadius: "0",
                      boxShadow: "none",
                    }}
                  >
                    <div
                      style={{ padding: "10px", color: "black" }}
                      aria-label="menu"
                    >
                      <RoomIcon />
                    </div>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="From"
                      inputProps={{ "aria-label": "From" }}
                    />
                  </Paper>{" "}
                  <Paper
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 300,
                      height: 50,
                      border: "1px solid rgba(0,0,0,0.2)",
                      borderRadius: "0",
                      boxShadow: "none",
                    }}
                  >
                    <div
                      style={{ padding: "10px", color: "black" }}
                      aria-label="menu"
                    >
                      <RoomIcon />
                    </div>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="To"
                      inputProps={{ "aria-label": "To" }}
                    />
                  </Paper>{" "}
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Depart"
                      value={departValue}
                      onChange={(newValue) => {
                        setDepartValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          className="dateInput depart"
                          sx={{ backgroundColor: "white" }}
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                  {isOneWay ? (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Return"
                        className="return"
                        value={returnValue}
                        onChange={(newValue) => {
                          setReturnValue(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            className="dateInput return"
                            sx={{ backgroundColor: "white" }}
                            {...params}
                          />
                        )}
                        disabled="true"
                      />
                    </LocalizationProvider>
                  ) : (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Return"
                        className="return"
                        value={returnValue}
                        onChange={(newValue) => {
                          setReturnValue(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            className="dateInput return"
                            sx={{ backgroundColor: "white" }}
                            {...params}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  )}
                  <Button
                    variant="contained"
                    sx={{
                      marginLeft: "20px",
                      height: "50px",
                      width: " 140px",
                      borderRadius: 0,
                      backgroundColor: "#FF5A5A",
                      marginTop: "30px",
                    }}
                  >
                    Search
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SearchCard;
