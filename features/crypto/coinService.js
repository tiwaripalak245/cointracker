import axios from "axios"
const api_url = "https://api.coingecko.com/api/v3"

export const fetchCoins = async() => {
  const response = await axios.get('https://api.coingecko.com/api/v3/search/trending')  
  return response.data.coins
}


// export const fetchTrendingCoins = async () => {
//   try {
//     const response = await axios.get(
//       'https://api.coingecko.com/api/v3/search/trending', {
//         params
//       }
//     );
//     return response.data.coins;
//   } catch (error) {
//     console.error('Error fetching trending coins:', error);
//     throw error;
//   }
// };