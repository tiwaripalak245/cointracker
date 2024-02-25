import {Card, CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcoinData} from "../features/crypto/coinSlice";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

const DetailPage = () => {
  const dispatch = useDispatch();

  const {coins, isLoading } = useSelector((state) => state.tradecoins);
  const {Id} = useParams()


  useEffect(() => {
    dispatch(getcoinData());
  }, []);

const itemDetail = coins.filter((coin) => coin.item.coin_id === Number(Id))[0]
?.item;
console.log("itemDetail", itemDetail)

  return (
<>
<BackButton location={'/'}/>
<Card container sx={{marginTop: "50px"}}>
    <Card item xs={3} sx={{backgroundColor: "black", color: "white", width: "100%"}}>
    <CardMedia
        sx={{ height: '140px', width: "200px", objectFit: 'contain', margin: 'auto', marginBottom: '5px' }}
        image={itemDetail?.large}
        title="green iguana"
        alt="Product Image"

      />

        <Typography variant="h4" sx={{textAlign: "center", color: "gold", fontSize: "50px", textDecoration: "bold"}} gutterBottom>
          Coin Details
        </Typography>
        <Typography variant="h6" sx={{textAlign: "center"}} gutterBottom>
          ID: {itemDetail?.id}
        </Typography>
        <Typography variant="h6" sx={{textAlign: "center"}} gutterBottom>
          Coin ID: {itemDetail?.coin_id}
        </Typography>
        <Typography variant="h6" sx={{textAlign: "center"}} gutterBottom>
          Name: {itemDetail?.name}
        </Typography>
        <Typography variant="h6" sx={{textAlign: "center"}} gutterBottom>
          Symbol: {itemDetail?.symbol}
        </Typography>
        <Typography variant="h6" sx={{textAlign: "center"}} gutterBottom>
          Market Cap Rank: {itemDetail?.market_cap_rank}
        </Typography>
        <Typography variant="h6" sx={{textAlign: "center"}} gutterBottom>
          {itemDetail?.title}
        </Typography>
        <Typography variant="body1" sx={{textAlign: "center"}} gutterBottom>
          {itemDetail?.description}
        </Typography>
    </Card>
  </Card>
</>
  );
};

export default DetailPage;
