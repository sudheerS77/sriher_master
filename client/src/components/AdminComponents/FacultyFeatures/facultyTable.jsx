import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
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

//Redux actions
import { deleteFaculty } from "../../../Redux/Reducer/Faculty/faculty.action";

const FacultyTable = () => {
  const [facultyData, setFacultyData] = useState([]);

  const reduxState = useSelector((globalStore) => globalStore.faculty);
  const navigate = useNavigate();

  useEffect(() => {
    reduxState?.faculty && setFacultyData(reduxState?.faculty.data);
  }, [reduxState]);

  let idCount = 1;
  const dispatch = useDispatch();
  const deleteItem = (_id) => {
    dispatch(deleteFaculty(_id));
    //window.location.reload();
  };
  return (
    <>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">ID</TableCell>
              <TableCell className="tableCell">Faculty Name</TableCell>
              <TableCell className="tableCell">Deg</TableCell>
              <TableCell className="tableCell">Position</TableCell>
              <TableCell className="tableCell">Status</TableCell>
              <TableCell className="tableCell">Edit</TableCell>
              <TableCell className="tableCell">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {facultyData?.map((row) => (
              <TableRow key={row._id} className="hover:bg-gray-100">
                <TableCell className="tableCell">{idCount++}</TableCell>
                <TableCell className="tableCell">
                  <div className="flex items-center">
                    <img
                      src={row.image}
                      alt=""
                      className="w-12 h-12 rounded-md mr-10 fit"
                    />
                    {row.name}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.deg}</TableCell>
                <TableCell className="tableCell">{row.position}</TableCell>
                <TableCell className="tableCell">
                  <span
                    className={
                      row.status === "Active"
                        ? "p-2 rounded-sm text-white bg-green-900"
                        : "p-2 rounded-sm text-yellow-100 bg-yellow-500"
                    }
                  >
                    {row.status}
                  </span>
                </TableCell>
                <TableCell className="tableCell">
                  <Link to={`/admin/faculty/${row._id}`} id="edit_label">
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
                    to="/admin/faculty"
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FacultyTable;