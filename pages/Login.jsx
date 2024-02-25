import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/crypto/cryptoSlice";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.crypto
  );

  const [formdata, setformData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formdata;

  const handleChange = (e) => {
    setformData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formdata));
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/");
    }
    if (isError && message) {
      toast.error(message);
    }
  }, [user, isSuccess, isError, message, navigate, isLoading]);

  if (isLoading) {
    return (
      <Typography variant="h4" sx={{ color: "white" }} textAlign={"center"}>
        Loading...
      </Typography>
    );
  }

  return (
    <>
      <div className="login">
        <h2>Login</h2>
        <form className="login-box" onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Enter Email"
            variant="outlined"
            color="success"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            color="success"
            type="password"
            sx={{ marginTop: "20px" }}
            name="password"
            value={password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="secondary"
            sx={{ marginTop: "20px" }}
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
