import { styled } from "@mui/material/styles";

import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";

const OptionButtonStyle = styled(Button)(({ theme }) => ({
  color: "#000000",
  backgroundColor: "#ffffff",
 


  borderRadius: 16,
  "&:hover": {
    borderBottom: "3px solid #000000",
    backgroundColor: "transparent",   
    boxShadow: 'none',

  },
  marginRight: "10px",
  
}));

export default OptionButtonStyle;
