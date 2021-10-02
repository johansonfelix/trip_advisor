import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import luggage from "../../res/images/luggage.png";
import { Typography } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import RoomIcon from "@mui/icons-material/Room";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Section1 = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#FFF5BF",
          height: "400px",         
          paddingLeft: "50px",
      
        }}
      >
       
          <Stack direction="row" sx={{position: 'relative'}} >
          <Grid container>
            <Grid item xs={12}>
              <h1
                style={{
                  marginBottom: 0,
                  fontSize: "70px",
                  fontFamily: "Poppins",
                  color: "#656F77",
                  fontWeight: "bold",
                  lineHeight: "105%",
                  letterSpacing: "-1px",
                }}
              >
                It's more than just a trip
              </h1>
            </Grid>
            <Grid item xs={9}>
              <h3
                style={{
                  fontSize: "18px",
                  color: "#656F77",
                  fontWeight: "normal",
                  lineHeight: "150%",
                }}
              >
                Find the perfect excuse to revisit an old favourite or get a
                taste of somewhere new
              </h3>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "50px" }}>
              <Stack direction="row" spacing={4}>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "16px",
                    border: "2px solid #ACB8C2",
                    color: "#656F77",
                    height: "60px",
                    width: "250px",
                    padding: "7px 22px",
                    textTransform: "initial",
                  }}
                  startIcon={<SearchIcon />}
                >
                  Hotels near you
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "16px",
                    border: "2px solid #ACB8C2",
                    color: "#656F77",
                    height: "60px",
                    width: "250px",
                    padding: "7px 22px",
                    textTransform: "initial",
                  }}
                  startIcon={<AttachMoneyIcon />}
                >
                  Cheap Restos
                </Button>
              </Stack>
            </Grid>
          </Grid>
          {/* <Grid item xs={4}> */}
           
             
           
            </Stack>
          {/* </Grid> */}
       
       
      </Box>
    </>
  );
};

export default Section1;
