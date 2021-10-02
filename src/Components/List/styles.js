import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "25px",
    margin: "20px 10px",
    borderRadius: "16px",
    border: "none",
    backgroundColor: "rgba(255, 255, 255,0.2)",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "70vh",
    borderRadius: "10px",
    overflowY: "scroll",
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
      backgroundColor: " #F5F5F5",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar": {
      width: "6px",
      backgroundColor: "#F5F5F5",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
     "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)",
     "backgroundColor": "#000",
    },
  },
}));
