import { styled } from "@mui/material/styles";

import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";

const SearchButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "black",

  borderRadius: 16,
  "&:hover": {
    backgroundColor:"rgba(0,0,0,0.8)",
    boxShadow: "none"
  },
  marginRight: "10px",
  
}));

export default SearchButton;
