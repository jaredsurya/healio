import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Microlink from "@microlink/react";

function Weblinks({ links }) {
  return (
    <>
    {links.length > 0 ? <Typography variant="h5" align="center" gutterBottom>~ Helpful links ~</Typography> : null}
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
