import { styled } from "@mui/material/styles";

import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";

const FlightButton = styled(Button)(({ theme }) => ({
  color: "#333",
  backgroundColor: "transparent",
  textTransform: "initial",
  fontSize: '14px',
  fontWeight: "normal", 
  borderRadius: 0,


  "&:active": {
    borderBottom: "3px solid #000000",
    backgroundColor: "transparent",   
    boxShadow: 'none',

  },
  marginRight: "10px",
  
}));

export default FlightButton;
