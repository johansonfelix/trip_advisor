import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import luggage from "../../res/images/luggage.png";
import { Typography } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FooterLinks from "./FooterLinks";
import FooterText from "./FooterText";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="white">
      <Box
        sx={{
          bgcolor: "black",
          height: "365px",
          position: "relative",
          paddingLeft: "50px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ textAlign: "left", paddingTop: "30px" }}
        >
          <Grid container>
            <Grid item xs={3}>
              <Stack spacing={3}>
                <p
                  style={{
                    fontfamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "20px",
                    lineHeight: "90%",
                  }}
                >
                  About Tripvisor
                </p>
                <FooterLinks>About us</FooterLinks>
                <FooterLinks>Press</FooterLinks>
                <FooterLinks>Resources and Policies</FooterLinks>
                <FooterLinks>Careers</FooterLinks>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={3}>
                <p
                  style={{
                    fontfamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "20px",
                    lineHeight: "90%",
                  }}
                >
                  Explore
                </p>
                <FooterLinks>Write a review</FooterLinks>
                <FooterLinks>Add a place</FooterLinks>
                <FooterLinks>Help Centre</FooterLinks>
                <FooterLinks>Travel Articles</FooterLinks>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={3}>
                <p
                  style={{
                    fontfamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "20px",
                    lineHeight: "90%",
                  }}
                >
                  Do Business with us
                </p>
                <FooterLinks>Owners</FooterLinks>
                <FooterLinks>Business Advantage</FooterLinks>
                <FooterLinks>Sponsered Placements</FooterLinks>
                <FooterLinks>Advertise with us</FooterLinks>
              </Stack>
            </Grid>
          </Grid>

          <Grid item xs={12} style={{ paddingLeft: 0, paddingTop: "30px" }}>
            <Stack direction="row">
              <h2 style={{ color: "#FFF3B6" }} className="pa0">
                Tripvisor
              </h2>
              <Grid container sx={{ marginTop: "25px", marginLeft: "50px" }}>
                <Grid item xs={10}>
                  <Stack direction="row" spacing={7}>
                    <FooterText className="">Terms of Use</FooterText>

                    <FooterText className="">
                      Privacy and Cookie Statement
                    </FooterText>

                    <FooterText className="">Site Map</FooterText>

                    <FooterText className="">How the Site works</FooterText>
                  </Stack>
                </Grid>
                <Grid item xs={2}>
                  <Stack direction="row" spacing={2}>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
