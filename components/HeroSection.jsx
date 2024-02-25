import { Button, Container, InputBase, LinearProgress, Table, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import hero from '../src/assets/hero-img.webp'
import { useSelector } from 'react-redux'
import icon1 from '../src/assets/icon-1.svg'
import icon2 from '../src/assets/intro-icon-2.svg'
import icon3 from '../src/assets/icon-3.svg'
import icon4 from '../src/assets/icon-4.svg'
import { Link } from 'react-router-dom'


const HeroSection = () => {
  const {user, isLoading} = useSelector((state) => state.crypto)
  const {coins, filteredCoins, searchone} = useSelector((state) => state.tradecoins)

//   const dispatch = useDispatch()
// const navigate = useNavigate()

// const [search, setSearch]= useState("")

// const handleSearch = (e) => {
//   e.preventDefault()
//   setSearch("")
// }
// console.log(searchone)



  return (
    <>
<div className="hero-section ">
<div className='hero-text'>
        <Typography variant='h2' sx={{color: "gold"}}>BUY & Exchange Crypto Tokens Instantly</Typography>
        <Typography variant='subtitle2' sx={{color: "white", fontSize: "20px"}}>Bitcoin, Ethereum, and other crypto are revolutionizing how we invest, bank, and use money.</Typography>
        <p className='para'>&#9758;  Import data from 700+ integrations</p>
        <p className='para'> &#9758;  Track DeFi, NFTs, futures, margin trades</p>
        <p className='para'> &#9758;  Historical crypto and fiat spot prices</p>
      <button>Start Tracking Free</button>
{/* <InputBase
        sx={{flex: 1, backgroundColor: "#F7F7F7", padding: "10px", borderRadius:"10px", marginTop: "10px"}}
        placeholder="Search crypto"
       value={searchone}
       onChange={(e) => dispatch(setSearchQuery(e.target.value))} 
       onClick={(e) => handleSearch()}
        /> */}

</div>


<div className="hero-img">
<img src={hero} alt="" />
</div>
</div>




<div className="about">
  <div className="text-1">
    <img src={icon1} alt="" />
    <h4>Real-time price data</h4>
    <p>Updating 24/7 using price data from the biggest exchanges.</p>
  </div>
  <div className="text-1">
    <img src={icon2} alt="" />
    <h4>Free to use</h4>
    <p>Top notch crypto portfolio tracking at no cost.</p>
  </div>
  <div className="text-1">
    <img src={icon3} alt="" />
    <h4>Track your current portfolio balance and profit / loss</h4>
    <p>Thousands of coins and tokens available.</p>
  </div>
  <div className="text-1">
    <img src={icon4} alt="" />
    <h4>Your data is safe and secure
</h4>
    <p>We take data security and privacy very seriously.

</p>
  </div>
</div>
    </>
  )
}

export default HeroSection
