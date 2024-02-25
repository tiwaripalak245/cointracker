import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import { ThemeProvider, createTheme, makeStyles } from '@mui/material'
import Coin from '../components/Coin'
import CoinContainer from '../components/CoinContainer'
import { dark } from '@mui/material/styles/createPalette'
import HeroSection from '../components/HeroSection'
import Register from '../pages/Register'
import Login from '../pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from '../components/About'
import DetailPage from '../pages/DetailPage'
import { ThemeContext } from '@emotion/react'




const App = () => {

  const [toggle, setToggle] = useState(false)

  const changeTheme = () => {
    setToggle((previous) => !previous)
  }

const darkTheme = createTheme({
  palette: {
  primary: {
    main: toggle? "#14161A": "#dee1e6",
  },
  success: {
main: toggle? "#6C3428": "#6C3428"
  },
  secondary: {
    main: toggle? "#83A2FF" : "#FAF6F0"
  },
  error: {
    main: "#B80000"
  },
  info: {
    main: "#092635"
  }
  }
})


  return (
    <Router>
<ThemeProvider theme={darkTheme}>
    <Navbar changeTheme={changeTheme} />
<Routes>
  <Route path='/' changeTheme={changeTheme} element={<Home />} />
  <Route path='herosection' element={<HeroSection/>}/>
  <Route path='/coin' element={<Coin/>}/>
  <Route path='/coincontainer/' element={<CoinContainer/>}/>
{/* <Route path='/coinlist' element= {<CoinList/>}/> */}
  <Route path='/coindetail/:Id' element= {<DetailPage/>}/>
  <Route path = "/login" element={<Login/>}/>
  <Route path = "/register" element={<Register/>}/>
  


 </Routes>
 <About/>
</ThemeProvider>
<ToastContainer/>
    </Router>
  )
}

export default App
