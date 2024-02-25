import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";

const Coin = ({ coincard }) => {
  const { symbol, name, large, small, coin_id } = coincard.item;



  
  return (
<>
    <Grid item lg={12} >
    <Card sx={{ maxWidth: '100%', margin: '10px', padding: '5px', borderRadius: '10px', backgroundColor:"black", color: "white" }}>
      <CardMedia
        component="img"
        image={large}
        alt={`${name} image`}
        sx={{ height: '100px', objectFit: 'contain', margin: 'auto', marginBottom: '5px' }}
      />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ marginBottom: '5px', textAlign:'center' }}>
          {symbol}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: "white", textAlign:'center' }}>
          {name}
        </Typography>
        <Button component={Link} to={`/coindetail/${coin_id}`} size="small" variant="contained" fullWidth>
          Learn More
        </Button>
      </CardContent>
    </Card>
  </Grid>
</>


  );
};

export default Coin;
