import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCoins} from "./coinService";

const initialState = {
  coins: [],
  singleCoin: null,
  currency: null,
  filteredCoins: [],
  searchone: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
};
const coinSlice = createSlice({
  name: "tradecoin",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchone = action.payload;
      state.filteredCoins = state.coins.filter((coin) =>
        coin.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getcoinData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getcoinData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.coins = action.payload;
      })
      .addCase(getcoinData.rejected, (state) => {
        state.isSuccess = false;
        state.isError = true;
      })

  },
});

export const { setSearchQuery } = coinSlice.actions;
export default coinSlice.reducer;

export const getcoinData = createAsyncThunk("FETCH/COIN", async () => {
  try {
    return await fetchCoins();
  } catch (error) {
    console.log(error);
  }
});


// export const trendingCoins = createAsyncThunk(
//   "FETCH/TRENDING",
//   async (currency) => {
//     try {
//       return await fetchTrendingCoins(currency);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
