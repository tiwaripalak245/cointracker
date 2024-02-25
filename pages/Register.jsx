import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registUser } from '../features/crypto/cryptoSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {

  // getting data from crypto initial state
  const {user, isSuccess, isLoading, isError, message} = useSelector((state) => state.crypto)

// initializing Hooks
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // setting state in input
    const [formData, setformData] =useState({
        name: "",
        email: "",
        password: "", 
        password2: "",
    })

    // destructure state

    const {name, email, password,password2} = formData;
// form state logic
    const handleChange = (e) => {
        setformData({
            ...formData,
        [e.target.name]: e.target.value
        })
    }
// form submission
const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      toast.error("Passwords do not match!!");
    }
    dispatch(registUser(formData))
}

useEffect(() => {
  if (user || isSuccess) {
    navigate("/")
  }
  if (isError || message) {
    toast.error(message)
  }
}, [user, isSuccess, isError, message])

if (isLoading) {
  return <Typography variant='h4' sx={{color: "white"}} textAlign={"center"}>Loading...</Typography>
}


  return (
<>
    <div className="register">
    <h2>Register</h2>
    <form className='register-box' onSubmit={handleSubmit}>
    <TextField id="outlined-basic" label="Name" variant="outlined" color="success" type='text'
name='name' value={name} onChange={handleChange}
    />
    <TextField id="outlined-basic" label="Email" variant="outlined" color="success" type='email' sx={{marginTop: "10px"}}
name='email' value={email} onChange={handleChange}

    />
    <TextField id="outlined-basic" label="password" variant="outlined" color="success" type='password' sx={{marginTop: "20px"}}
name='password' value={password} onChange={handleChange}

    />
    <TextField id="outlined-basic" label="confirm Password" variant="outlined" color="success" type="password" sx={{marginTop: "10px"}} 
name='password2' value={password2} onChange={handleChange}

    />
    <Button type='submit' variant="contained" size='large'color="secondary" sx={{marginTop: "20px"}} >Register</Button>

      </form>
    </div>
</>
  )
}

export default Register
