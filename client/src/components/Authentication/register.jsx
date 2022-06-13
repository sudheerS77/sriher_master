import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


//Redux actins
import { signUp } from '../../Redux/Reducer/Auth/auth.action';


const Register = () => {
    const [values, setValues] = React.useState({
        fullName: "",
        institution: "",
        stateDentalCode: "",
        state: "",
        phoneNumber: "",
        email: "",
        password: '',
        cpassword: '',
        address: "",
        typeOfRegistration: "",
        showPassword: false,

      });
      const [errorMsg, setErrorMsg] = useState({
        show: false,
        hide: true,
        message: "",
      })
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const registrationType = [
        { value : "" }
    ]


  const dispatch = useDispatch();
  const reduxState = useSelector((globalState) => globalState.AuthReducer);

  const submit = () => {
        dispatch(signUp(values));
        setValues({
            fullName: "",
            institution: "",
            stateDentalCode: "",
            state: "",
            phoneNumber: "",
            email: "",
            password: '',
            address: "",
            typeOfRegistration: "",
            showPassword: false,
        })
        if(reduxState?.error?.response.data.error) {
            setErrorMsg({show: true, hide: false, message: reduxState?.error.response.data.error});
          }          
    }
    const closeError = () => {
        setErrorMsg({
          show: false,
          hide: true,
          message: "",
        })
        }


  return (
    <div className="bg-gray-50 border rounded-md py-10 mx-4 md:mx-20 lg:mx-52 shadow-xl">
        {errorMsg?.show && 
            <div className="flex w-full items-center justify-between bg-red-500 p-2 text-white font-light">
                {errorMsg.message} 
                <button onClick={closeError}>
                    <AiOutlineClose className="w-6 h-6"/>
                </button>
            </div> 
        }
        <h2 className="text-center md:mx-40 text-2xl font-bold text-gray-500 mb-4">Register</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
            <div className="flex flex-col items-center gap-5 w-full px-3 md:w-72">                
                <TextField
                    required
                    id="fullName"
                    label="Your name"  
                    value={values.fullName}
                    fullWidth
                    onChange={handleChange('fullName')}
                />
                <TextField
                    required
                    id="insitution"
                    label="Institution"                             
                    value={values.institution}
                    fullWidth
                    onChange={handleChange('institution')}
                />
                <TextField
                    required
                    id="stateDentalCode"
                    label="State Dental Council Number"                             
                    value={values.stateDentalCode}
                    fullWidth
                    onChange={handleChange('stateDentalCode')}
                />
                <TextField
                    required
                    id="state"
                    label="State of Registration"                             
                    value={values.state}
                    fullWidth
                    onChange={handleChange('state')}
                />
                
            </div>
            <div className="flex flex-col items-center gap-5 w-full px-3 md:w-72">                
                <TextField
                    required
                    id="phoneNumber"
                    label="Mobile Number"  
                    value={values.phoneNumber}
                    fullWidth
                    onChange={handleChange('phoneNumber')}
                />
                <TextField
                    id="typeOfRegistration"
                    select
                    fullWidth
                    value={values.typeOfRegistration}
                    label="Type Of Registration"
                    //value={currency}
                    onChange={handleChange('typeOfRegistration')}
                    //helperText="Type of Registration"
                >
         
                    <MenuItem key={"Postgraduate"} value={"Postgraduate"}>Postgraduate</MenuItem>         
                    <MenuItem key={"Faculty"} value={"Faculty"}>Faculty</MenuItem>
                    <MenuItem key={"International"} value={"International"}>International</MenuItem>     
                </TextField>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        type={values.showPassword ? 'text' : 'password'}
                        //value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        //value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>                                
            </div>
            <div className="flex flex-col items-center gap-6 w-full px-3 md:w-72">  
                <TextField
                    required
                    id="email"
                    label="Your email"  
                    value={values.email}
                    fullWidth
                    onChange={handleChange('email')}
                />                              
                <TextField
                    id="address"
                    label="address"
                    onChange={handleChange('address')}
                    value={values.address}
                    multiline
                    rows={4}
                    fullWidth
                    //defaultValue="address"
                />
                
                <Button variant="outlined" fullWidth className="h-14" onClick={submit}>Register</Button>
                
            </div>
        </div>
    </div>
  )
}

export default Register;