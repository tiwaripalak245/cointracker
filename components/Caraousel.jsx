import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { trendingCoins } from "../features/crypto/coinSlice";

const Caraousel = () => {
  const { currency } = useSelector((state) => state.tradecoins);
  const dispatch = useDispatch()
//   const [trending, SetTrending] = useState([]);
//   console.log(trending);

//   const fetchTrendingCoins = async (currency) => {
//     const response = await axios.get(
//       "https://api.coingecko.com/api/v3/search/trending",
//       {
//         params: {
//           currency: currency,
//         },
//       }
//     );
//     console.log(currency);

//     return response.data.coins;
//   };

//   useEffect(() => {
// dispatch(trendingCoins(currency))
//   }, [currency]);



  return (
    <div style={{ color: "white" }} className="caraousel">
      Caraousel
      <p></p>
    </div>
  );
};

export default Caraousel;
