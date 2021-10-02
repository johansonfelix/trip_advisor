import { styled } from "@mui/material/styles";

import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import ApartmentIcon from "@mui/icons-material/Apartment";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Stack from "@mui/material/Stack";
import OptionButtonStyle from "./OptionButtonStyle";
import "./style.css";
import { getIconUtilityClass } from "@mui/material";

const OptionButton = ({
  type,
  onTabClick,
  flightSearchToggle,
  flightSearchToggleOff,
  restaurantSearchToggleOn,
  hotelSearchToggleOn,
  attractionSearchToggleOn,
}) => {
  switch (type) {
    case "hotels": {
      return (
        <div
          className={`tab initial ${type}`}
          onClick={() => {
            flightSearchToggleOff();
            hotelSearchToggleOn();
          }}
          onClickCapture={onTabClick}
        >
          <OptionButtonStyle
            variant="contained"
            sx={{
              borderRadius: 0,
              backgroundColor: "transparent",
              color: "#000",
              width: "142px",
              height: "109px",
              boxShadow: 0,
              padding: 0,
              margin: 0,
            }}
            elevation={0}
          >
            <Stack
              sx={{
                margin: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
              }}
            >
              <ApartmentIcon fontSize="medium" />
              <div
                className="buttonText"
                style={{
                  color: "#000",
                  fontFamily: "Poppins",
                  textTransform: "initial",
                  paddingBottom: 0,
                  marginTop: "20px",
                  fontWeight: "normal",
                  fontSize: "12px",
                }}
              >
                Hotels
              </div>
            </Stack>
          </OptionButtonStyle>
        </div>
      );
    }
    case "restaurants": {
      return (
        <div
          className="tab"
          onClick={() => {
            flightSearchToggleOff();
            restaurantSearchToggleOn();
          }}
          onClickCapture={onTabClick}
        >
          <OptionButtonStyle
            variant="contained"
            sx={{
              borderRadius: 0,
              backgroundColor: "transparent",
              color: "#000",
              width: "142px",
              height: "109px",
              boxShadow: 0,
              padding: 0,
              margin: 0,
            }}
            elevation={0}
          >
            <Stack
              sx={{
                margin: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
              }}
            >
              <RestaurantIcon fontSize="medium" />
              <div
                style={{
                  color: "#000",
                  fontFamily: "Poppins",
                  textTransform: "initial",
                  paddingBottom: 0,
                  marginTop: "20px",
                  fontWeight: "normal",
                  fontSize: "12px",
                }}
              >
                Restaurants
              </div>
            </Stack>
          </OptionButtonStyle>
        </div>
      );
    }
    case "attractions": {
      return (
        <div
          className="tab"
          onClick={() => {
            flightSearchToggleOff();
            attractionSearchToggleOn();
          }}
          onClickCapture={onTabClick}
        >
          <OptionButtonStyle
            variant="contained"
            sx={{
              borderRadius: 0,
              backgroundColor: "transparent",
              color: "#000",
              width: "142px",
              height: "109px",
              boxShadow: 0,
              padding: 0,
              margin: 0,
            }}
            elevation={0}
          >
            <Stack
              sx={{
                margin: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
              }}
            >
              <ConfirmationNumberIcon fontSize="medium" />
              <div
                style={{
                  color: "#000",
                  fontFamily: "Poppins",
                  textTransform: "initial",
                  paddingBottom: 0,
                  marginTop: "20px",
                  fontWeight: "normal",
                  fontSize: "12px",
                }}
              >
                Things to do
              </div>
            </Stack>
          </OptionButtonStyle>
        </div>
      );
    }
    case "flights": {
      return (
        <div
          className="tab"
          onClick={flightSearchToggle}
          onClickCapture={onTabClick}
        >
          <OptionButtonStyle
            variant="contained"
            sx={{
              borderRadius: 0,
              backgroundColor: "transparent",
              color: "#000",
              width: "142px",
              height: "109px",
              boxShadow: 0,
              padding: 0,
              margin: 0,
            }}
            elevation={0}
          >
            <Stack
              sx={{
                margin: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
              }}
            >
              <FlightTakeoffIcon fontSize="medium" />
              <div
                style={{
                  color: "#000",
                  fontFamily: "Poppins",
                  textTransform: "initial",
                  paddingBottom: 0,
                  marginTop: "20px",
                  fontWeight: "normal",
                  fontSize: "12px",
                }}
              >
                Flights
              </div>
            </Stack>
          </OptionButtonStyle>
        </div>
      );
    }
    default: {
      return (
        <div className="tab" onClickCapture={onTabClick}>
          <OptionButtonStyle
            variant="contained"
            sx={{
              borderRadius: 0,
              backgroundColor: "transparent",
              color: "#000",
              width: "142px",
              height: "109px",
              boxShadow: 0,
              padding: 0,
              margin: 0,
            }}
            elevation={0}
          >
            <Stack
              sx={{
                margin: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
              }}
            >
              <ApartmentIcon fontSize="medium" />
              <div
                style={{
                  color: "#000",
                  fontFamily: "Poppins",
                  textTransform: "initial",
                  paddingBottom: 0,
                  marginTop: "20px",
                  fontWeight: "normal",
                  fontSize: "12px",
                }}
              >
                Hotels
              </div>
            </Stack>
          </OptionButtonStyle>
        </div>
      );
    }
  }
};

export default OptionButton;
