import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({location}) => {
  return (
    <>
    <Button variant="outlined" sx={{width: "200px", margin: "2rem", fontWeight: "bolder", fontSize: "20px"}}><Link to={location}>Back</Link></Button>  
    </>
  )
}

export default BackButton
