import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import options from "../../css/options.css";

//Reduc actions
import {
  getSlider,
  deleteSlider,
} from "../../../Redux/Reducer/Slider/slider.action";

const SliderTable = () => {
  const [sliderImages, setSliderImages] = useState([]);

  const reduxState = useSelector((globalStore) => globalStore.Slider);

  useEffect(() => {
    reduxState?.slider && setSliderImages(reduxState.slider.data);
  }, [reduxState]);

  let idCount = 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSlider());
  }, []);
  console.log(sliderImages);
  const deleteItem = (_id) => {
    dispatch(deleteSlider(_id));
    return;
  };

  return (
    <>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">ID</TableCell>
              <TableCell className="tableCell">Images</TableCell>
              <TableCell className="tableCell">Edit</TableCell>
              <TableCell className="tableCell">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sliderImages?.length > 0 ? (
              sliderImages?.map((row) => (
                <TableRow key={row._id} className="hover:bg-gray-100">
                  <TableCell className="tableCell">{idCount++}</TableCell>
                  <TableCell className="tableCell">
                    <div className="flex items-center">
                      <img
                        src={row.image}
                        alt=""
                        className="w-44 h-24 rounded-md mr-10 fit"
                      />
                      {row.imageType}
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">
                    <Link to={`/admin/slider/${row._id}`} id="edit_label">
                      <span
                        className="absolute z-50 text-sm font-light text-gray-50 bg-blue-600 rounded-md px-1.5 py-0.5"
                        id="edit"
                      >
                        Edit
                      </span>
                      <BiEdit className="w-6 h-6 text-blue-600" />
                    </Link>
                  </TableCell>
                  <TableCell className="tableCell">
                    <Link
                      to="/admin/slider"
                      onClick={() => deleteItem(row._id)}
                      id="delete_label"
                    >
                      <span
                        className="absolute z-50 text-sm font-light text-gray-50 bg-red-600 rounded-md px-1.5 py-0.5"
                        id="delete"
                      >
                        Delete
                      </span>
                      <MdDelete className="w-6 h-6 text-red-600" />
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <>Loading...</>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SliderTable;