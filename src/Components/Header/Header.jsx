import React, { useState } from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import useStyles from "./styles";
import { styled } from "@mui/material/styles";

import HeaderButton from "../Buttons/HeaderButton";
import SearchButton from "../Buttons/SearchButton";

import { purple } from "@mui/material/colors";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  borderRadius: 16,
  "&:hover": {
    backgroundColor: purple[700],
  },
}));
const Header = ({ setShowResults }) => {
  const classes = useStyles();
  return (
    <nav className="w-100 flex justify-between bg-white ph5-l ph2-m">
      <h1 onClick={()=> setShowResults(false)} className="black v-mid mv3-ns pointer ph3-l ">Tripvisor</h1>

      <div className="flex-grow flex items-center">
        <HeaderButton
          className={classes.bu}
          variant="contained"
          startIcon={<LanguageIcon />}
        >
          EN
        </HeaderButton>
        <HeaderButton
          className={classes.bu}
          variant="contained"
          startIcon={<FavoriteBorderOutlinedIcon />}
        >
          Trips
        </HeaderButton>
        <HeaderButton
          className={classes.bu}
          style={{}}
          variant="contained"
          startIcon={<NotificationsOutlinedIcon />}
        >
          Alerts
        </HeaderButton>
        <HeaderButton
          className={classes.bu}
          variant="contained"
          startIcon={<PersonOutlineIcon />}
        >
          Login in
        </HeaderButton>
        <SearchButton
          variant="contained"                  
        >
          Sign up
        </SearchButton>
      </div>
    </nav>
  );
};

export default Header;
