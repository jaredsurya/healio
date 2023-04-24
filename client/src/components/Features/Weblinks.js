import { Grid, Typography } from "@mui/material";
import React from "react";
import Microlink from "@microlink/react";

function Weblinks({ links }) {
  
  if(links.length < 1){
    return <Typography fontWeight={"bold"}>No links have been added yet.</Typography>
  }
  
  return (
    <>
    <Grid container align="center" justifyContent="center" spacing={1}>
      {links.map((link) => {
        return (
          <Grid item md={12} lg={5} key={link.id}>
            <Microlink url={link.url} media={['image', 'logo']} />
          </Grid>
        );
      })}
    </Grid>
    </>
  );
}

export default Weblinks;
