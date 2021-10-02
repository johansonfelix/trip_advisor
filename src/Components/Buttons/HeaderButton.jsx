import { styled } from "@mui/material/styles";

import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";

const HeaderButton = styled(Button)(() => ({
  color: 'black',
  backgroundColor: "white",
  boxShadow: "none",
  borderRadius: 16,
  "&:hover": {
    backgroundColor: "rgba(0,0,0, 0.1)",
    boxShadow: "none"
  },
  marginRight: "10px",
  
}));

export default HeaderButton;
