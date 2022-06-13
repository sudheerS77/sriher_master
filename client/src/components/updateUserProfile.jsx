import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link }  from "react-router-dom";
import { RiCloseFill } from 'react-icons/ri';

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
import { updateUserData } from "../Redux/Reducer/User/user.action";


const UpdateUserProfile = () => {
    const [user, setUser] = useState([{
        
    }]);
    const [values, setValues] = React.useState({        
      });
    
    //   const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    //   };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


    const dispatch = useDispatch();
    const reduxState = useSelector((globalStore) => globalStore.user.user);

    useEffect(() => {
        reduxState?.user && setUser(reduxState.user);
    }, [reduxState]);
    
    console.log(user);
  const submit = () => {
      console.log(values);
      console.log(user);
      
      dispatch(updateUserData(values));
      console.log(values);
        // setValues({
        //     fullName: "",
        //     institution: "",
        //     stateDentalCode: "",
        //     state: "",
        //     phoneNumber: "",
        //     email: "",
        //     password: '',
        //     address: "",
        //     typeOfRegistration: "",
        //     showPassword: false,
        // })
        //dispatch(signUp(values));
        
    }


  return (
    <div className="bg-gray-50 rounded-md py-4 md:py-10 mx-4 md:mx-20 border-2 border-gray-200 shadow-xl">
        <div className="mx-4 md:mx-20 mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-500 mb-4">Update Your Profile</h2>
            <Link to="/profile" >
                <RiCloseFill className="text-red-600 w-10 h-10"/>
            </Link>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
            <div className="flex flex-col items-center gap-2 w-72">                
                <TextField
                    //required
                    helperText="Your name"  
                    value={user.fullName}
                    fullWidth
                    onChange={(e) => setUser((prev) => ({...prev, fullName: e.target.value }))}
                />
                <TextField
                    required
                    id="insitution"
                    helperText="Institution"                             
                    value={user?.institution}
                    fullWidth
                    onChange={(e) => setUser((prev) => ({...prev, institution: e.target.value }))}
                />
                <TextField
                    required
                    id="stateDentalCode"
                    helperText="State Dental Council Number"                             
                    value={user?.stateDentalCode}
                    fullWidth
                    onChange={(e) => setUser((prev) => ({...prev, stateDentalCode: e.target.value }))}
                />
                <TextField
                    required
                    id="state"
                    helperText="State of Registration"                             
                    value={user?.state}
                    fullWidth
                    onChange={(e) => setUser((prev) => ({...prev, state: e.target.value }))}
                />
                
            </div>
            <div className="flex flex-col items-center gap-5 w-72">                
                <TextField
                    required
                    //id="phoneNumber"
                    helperText="Mobile Number"  
                    value={values.phoneNumber}
                    fullWidth
                    onChange={(e) => setUser((prev) => ({...prev, phoneNumber: e.target.value }))}
                />
                <TextField
                    id="typeOfRegistration"
                    select
                    fullWidth
                    value={""}
                    helperText="Type Of Registration"
                    //value={currency}
                    onChange={(e) => setUser((prev) => ({...prev, typeOfRegistration: e.target.value }))}
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
                        //value={values?.password}
                        onChange={(e) => setUser((prev) => ({...prev, password: e.target.value }))}
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
                {/* <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        //value={values.password}
                        onChange={(e) => setUser((prev) => ({...prev, password: e.target.value }))}
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
                </FormControl>                                 */}
                <TextField fullWidth className="border border-gray-50" 
                    helperText=" "
                />
            </div>
            <div className="flex flex-col items-center gap-6 w-72">  
                <TextField
                    required
                    id="email"
                    helperText="Your email"  
                    value={user?.email}
                    fullWidth
                    onChange={(e) => setUser((prev) => ({...prev, email: e.target.value }))}
                />                              
                <TextField
                    id="address"
                    helperText="address"
                    onChange={(e) => setUser((prev) => ({...prev, address: e.target.value }))}
                    value={values.address}
                    multiline
                    rows={4}
                    fullWidth
                    //defaultValue="address"
                />
                
                <Button variant="outlined" fullWidth className="h-14" onClick={submit}>Update Profile</Button>
                
            </div>
        </div>
    </div>
  )
}

export default UpdateUserProfile;