import { styled } from "@mui/material/styles";

import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";

const SideOptionButtons = styled(Button)(() => ({
  color: 'black',
  backgroundColor: "white",
  boxShadow: "none",
  borderRadius: 16,
  border: "2px solid #000",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
    boxShadow: "none"
  },
  "&:active" : {
    backgroundColor: "#fff",
    color: "#000",
  },
  marginRight: "10px",
  
}));

export default SideOptionButtons;
