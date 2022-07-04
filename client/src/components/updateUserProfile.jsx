import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

//Redux actins
import { updateUserData } from "../Redux/Reducer/User/user.action";

const UpdateUserProfile = () => {
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState([]);

  const dispatch = useDispatch();
  const reduxState = useSelector((globalStore) => globalStore.user.user);

  useEffect(() => {
    reduxState?.user && setUser(reduxState.user);
  }, [reduxState]);

  console.log("AAAAAAAAAA");
  console.log(user);
  // console.log(userData);
  // const { password, uData } = userData;
  // setUser(uData);
  // console.log("BBBBBBBBBBBBB");
  // console.log(user);

  const submit = () => {
    dispatch(updateUserData(user));
  };

  return (
    <div className="bg-gray-50 rounded-md py-4 md:py-10 mx-4 md:mx-20 border-2 border-gray-200 shadow-xl">
      <div className="mx-4 md:mx-20 mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-500 mb-4">
          Update Your Profile
        </h2>
        <Link to="/profile">
          <RiCloseFill className="text-red-600 w-10 h-10" />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
        <div className="flex flex-col items-center gap-2 w-72">
          <TextField
            //required
            helperText="Your name"
            value={user?.fullName}
            fullWidth
            onChange={(e) =>
              setUser((prev) => ({ ...prev, fullName: e.target.value }))
            }
          />
          <TextField
            required
            id="insitution"
            helperText="Institution"
            value={user?.institution}
            fullWidth
            onChange={(e) =>
              setUser((prev) => ({ ...prev, institution: e.target.value }))
            }
          />
          <TextField
            required
            id="stateDentalCode"
            helperText="State Dental Council Number"
            value={user?.stateDentalCode}
            fullWidth
            onChange={(e) =>
              setUser((prev) => ({ ...prev, stateDentalCode: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col items-center gap-5 w-72">
          <TextField
            required
            id="state"
            helperText="State of Registration"
            value={user?.state}
            fullWidth
            onChange={(e) =>
              setUser((prev) => ({ ...prev, state: e.target.value }))
            }
          />
          <TextField
            required
            //id="phoneNumber"
            helperText="Mobile Number"
            value={user?.phoneNumber}
            fullWidth
            onChange={(e) =>
              setUser((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
          />
          <TextField
            id="typeOfRegistration"
            select
            fullWidth
            value={user ? user.typeOfRegistration : " "}
            helperText="Type Of Registration"
            //value={currency}
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                typeOfRegistration: e.target.value,
              }))
            }
            //helperText="Type of Registration"
          >
            <MenuItem key={"Postgraduate"} value={"Postgraduate"}>
              Postgraduate
            </MenuItem>
            <MenuItem key={"Faculty"} value={"Faculty"}>
              Faculty
            </MenuItem>
            <MenuItem key={"International"} value={"International"}>
              International
            </MenuItem>
          </TextField>
        </div>
        <div className="flex flex-col items-center gap-6 w-72">
          <TextField
            required
            id="email"
            helperText="Your email"
            value={user?.email}
            fullWidth
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <TextField
            id="address"
            helperText="address"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, address: e.target.value }))
            }
            value={user?.address}
            multiline
            rows={1}
            fullWidth
            //defaultValue="address"
          />

          <Button
            variant="outlined"
            fullWidth
            className="h-14"
            onClick={submit}
          >
            <Link to="/profile">Update Profile</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
