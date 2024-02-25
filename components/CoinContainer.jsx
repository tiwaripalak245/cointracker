import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Coin from "./Coin";
import { useDispatch, useSelector } from "react-redux";
import { getcoinData } from "../features/crypto/coinSlice";
import BackButton from "./BackButton";

const CoinContainer = ({location}) => {
  const dispatch = useDispatch();
  const { coins, isLoading, isSuccess, isError } = useSelector(
    (state) => state.tradecoins
  );

  const getdata = () => {
    dispatch(getcoinData());
  };

  useEffect(() => {
    getdata();
  }, []);

  if (isLoading) {
    return (
      <Typography variant="h3" sx={{ color: "white" }} textAlign={"center"}>
        Cards Loading...
      </Typography>
    );
  }

  return (
<>
<BackButton location={'/'}/>
 
 <Grid container spacing={1}>
   {coins.map((coincard) => (
     <Coin key={coincard.item.coin_id} coincard={coincard} />
   ))}
 </Grid>
</>
  );
};

export default CoinContainer;
