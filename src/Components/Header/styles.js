import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  logo: {
    /* Tripvisor */
    position: "static",
    width: "138px",
  
    left: "-120.5px",
    top: "20px",
    /* Display 3 */
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold", 
    /* identical to box height, or 41px */

    display: "flex",
    alignItems: "center",
    letterSpacing: "-1px",

    /* Accent/Yellow */

    color: "#FFF3B6",

    /* Inside Auto Layout */

    flex: "none",
    order: 0,
    flexGrow: 0,
  },
  icon: {
    margin: "0px 15px"  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "20ch" },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  signUp : {
    backgroundColor: "#ffffff",
    "&:hover":{ backgroundColor: "rgba(255, 255, 255, 0.2)"}
  }

}));
