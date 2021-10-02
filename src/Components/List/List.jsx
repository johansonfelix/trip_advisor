import React, { useState, useEffect, createRef } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import './style.css';
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@material-ui/core";
import Paper from "@mui/material/Paper";

import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";

import InputBase from "@mui/material/InputBase";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

import useStyles from "./styles";
import SideOptionButtons from "../Buttons/SideOptionButtons";
import { Autocomplete } from "@react-google-maps/api";
import Filter from './Filter';

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
  setShowResults,
  coordinates,
  setCoordinates,
  address,
  setAddress,
}) => {
  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]);

  const [autoComplete, setAutoComplete] = useState(null);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [places]);



  useEffect(()=> {
    let hotelButton = document.querySelector('.hotelOptionButton');
    let restoButton = document.querySelector('.restoOptionButton');
    let attractionButton = document.querySelector('.attractionOptionButton');
    switch(type) {
      case 'hotels' :{
       hotelButton.classList.toggle('active');
       restoButton.classList.remove('active');
       attractionButton.classList.remove('active');
       break;
      }
      case 'restaurants' :{
       restoButton.classList.toggle('active');
       hotelButton.classList.remove('active');
       attractionButton.classList.remove('active');
       break;
      }
      case 'attractions' :{
       attractionButton.classList.toggle('active');
       restoButton.classList.remove('active');
       hotelButton.classList.remove('active');
       break;
      }
  
      default : break;
    }
  })


const handleOptionPress = (type) => {
  setType(type);
  let hotelButton = document.querySelector('.hotelOptionButton');
  let restoButton = document.querySelector('.restoOptionButton');
  let attractionButton = document.querySelector('.attractionOptionButton');

  switch(type) {
    case 'hotels' :{
     hotelButton.classList.toggle('active');
     restoButton.classList.remove('active');
     attractionButton.classList.remove('active');
     break;
    }
    case 'restaurants' :{
     restoButton.classList.toggle('active');
     hotelButton.classList.remove('active');
     attractionButton.classList.remove('active');
     break;
    }
    case 'attractions' :{
     attractionButton.classList.toggle('active');
     restoButton.classList.remove('active');
     hotelButton.classList.remove('active');
     break;
    }

    default : break;
  }
}

const onLoad = (autoC) => setAutoComplete(autoC);
  const onPlaceChanged = () => {
    if (autoComplete !== null) {
      console.log(autoComplete.getPlace());
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
    let searchInput = document.querySelector('.searchInput');
    
    setAddress(autoComplete.getPlace().formatted_address);
    searchInput.placeholder= address;
    setCoordinates({ lat, lng });
    
  };

  return (
    <div className={`${classes.container}`}>
      <Button
        onClick={() => setShowResults(false)}
        style={{ textTransform: "none", marginLeft: 0, paddingLeft: 0 }}
      >
        <ArrowBackIcon
          style={{ fontSize: "32px", marginLeft: 0, paddingLeft: 0 }}
        />
        Go Back
      </Button>
      <h2 style={{ fontWeight: "600", fontSize: "28px" }}>
        Restaurants, Hotels & Attractions around you
      </h2>
      <Grid item xs={12}>
              <Stack direction="row" sx={{ marginTop: "20px", marginBottom: "20px" }}>
                <SideOptionButtons className="hotelOptionButton" onClick={()=>handleOptionPress('hotels')}>Hotels</SideOptionButtons>
                <SideOptionButtons  className="restoOptionButton" onClick={()=>handleOptionPress('restaurants')}>Restaurants</SideOptionButtons>
                <SideOptionButtons  className="attractionOptionButton" onClick={()=>handleOptionPress('attractions')}>Attractions</SideOptionButtons>
              </Stack>
            </Grid>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <Grid spacing={2} direction="row" >
          
            <Grid item xs={12}>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "auto",
                    height: 50,
                    border: "1px solid rgba(0,0,0, 0.7)",
                    borderRadius: "16px",
                    boxShadow: "none",
                    marginTop: "30px",
                    marginBottom:"10px"
                  }}
                >
                  <div
                    style={{ padding: "10px", color: "black" }}
                    aria-label="menu"
                  >
                    <LocationOnOutlinedIcon />
                  </div>

                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder={address}
                    inputProps={{ "aria-label": "Where to?" }}
                    onChange={""}
                    className="searchInput"                    
                  />
                </Paper>
              </Autocomplete>
              </Grid> 
              <Grid item xs={12} >
             

          <FormControl className={classes.formControl}>
            <InputLabel>Filter by Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
              </Grid>{/* filters (Price, Rating, ) */}
          </Grid>

         {/* */}
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
