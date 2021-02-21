import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    height: "100vh",
    margin: "0px",
    background: theme.palette.secondary.light,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.primary,
    background: theme.palette.secondary.dark,
  },
}));

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((response) => setPhotos(response.data));
  }, []);

  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>Uno</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>Dos</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>Tres</Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
