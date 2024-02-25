import React, { useEffect, useState } from 'react'
import { Button, Container, IconButton, InputBase, Paper, ThemeProvider, Typography } from '@mui/material'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom'
import HeroSection from '../components/HeroSection';
import { useSelector } from 'react-redux';


const Home = () => {

const {user} = useSelector((state) => state.crypto)

const navigate = useNavigate()


useEffect(() => {
  if (!user) {
    navigate("/login")
  }
},[user]);

  return (
    <>
<HeroSection/>
    </>
  )
}

export default Home
