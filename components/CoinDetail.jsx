// import { CardActions, CardContent, Grid, Typography } from "@mui/material";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getcoinData, singleCardDetail } from "../features/crypto/coinSlice";
// import { useParams } from "react-router-dom";

// const CoinDetail = () => {
//   const dispatch = useDispatch();

//   const {coins, singleCoin, isLoading } = useSelector((state) => state.tradecoins);
//   const {Id} = useParams()


//   useEffect(() => {
//     dispatch(getcoinData());
//   }, [singleCoin]);

// const itemDetail = coins.filter((coin) => coin.item.coin_id === Number(Id))[0]
// ?.item;
// console.log("itemDetail", itemDetail)

//   return (
//     <Grid sx={{ margin: "100px" }} item xs={12} md={6}>
//       <CardActions sx={{ display: "flex" }}>
//         <CardContent>
//           <Typography variant="h3" sx={{ color: "white", backgroundColor: "white" }}>
//             {singleCoin?.name}
//           </Typography>
//           <Typography variant="subtitle1" paragraph sx={{ color: "white" }}>
//             This blog post shows a few different types of content that are
//             supported and styled with Material styles. Basic typography, images,
//             and code are all supported. You can extend these by modifying
//             Markdown.js. Cum sociis natoque penatibus et magnis dis parturient
//             montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque
//             ornare sem lacinia quam venenatis vestibulum. Sed posuere
//             consectetur est at lobortis. Cras mattis consectetur purus sit amet
//             fermentum. Curabitur blandit tempus porttitor. Nullam quis risus
//             eget urna mollis ornare vel eu leo. Nullam id dolor id nibh
//             ultricies vehicula ut id elit.
//           </Typography>
//         </CardContent>
//       </CardActions>
//     </Grid>
//   );
// };

// export default CoinDetail;
