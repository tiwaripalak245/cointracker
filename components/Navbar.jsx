import {
  AppBar,
  Box,
  Button,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/crypto/cryptoSlice";

const Navbar = ({ changeTheme }) => {
  const [currency, SetCurrency] = useState("INR");
  const [symbol, SetSymbol] = useState("₹");

  console.log(currency)

  useEffect(() => {
    if (currency === "INR") SetSymbol("₹");
    else if (currency === "USD") SetSymbol("$");
  }, [currency]);



  const { user } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  const handlelogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, color: "gold" }}
            color="success"
            className="logo-name"
          >
            <Link to="/">
              {" "}
              <CurrencyYenIcon className="logo" /> CRYPTO APP
            </Link>
          </Typography>
          <Select
            variant="outlined"
            sx={{
              width: "80px",
              height: "30px",
            }}
            value={currency}
            onChange={(e) => SetCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD </MenuItem>
            <MenuItem value={"INR"}>INR </MenuItem>
          </Select>

          {user ? (
            <>
              {" "}
              <Button
                color="info"
                sx={{ color: "gold", marginLeft: "10px", width: "10rem", fontWeight: "bolder", fontSize: "20px"}}
                variant="contained"
              >
                <Link to={"/coincontainer"}>Coins</Link>
              </Button>
              <Button
                color="error"
                variant="contained"
                sx={{ color: "white", marginLeft: "10px", width: "10rem", fontWeight: "bolder", fontSize: "20px" }}
                onClick={handlelogOut}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                color="info"
                sx={{ color: "gold", marginLeft: "10px" }}
                variant="contained"
              >
                <Link to={"/login"}>Login</Link>
              </Button>
              <Button
                color="info"
                sx={{ color: "gold", marginLeft: "10px" }}
                variant="contained"
              >
                <Link to={"/register"}>Register</Link>
              </Button>
            </>
          )}
          <Button
            variant="contained"
            sx={{ marginLeft: "20px" }}
            onClick={changeTheme}
          >
            {" "}
            <Brightness4Icon /> Change Theme
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
