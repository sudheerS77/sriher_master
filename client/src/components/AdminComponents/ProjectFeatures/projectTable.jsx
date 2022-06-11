import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEdit } from "react-icons/bi";
import { MdDelete, MdViewInAr } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//Redux actions
import { getProject, deleteProject } from "../../../Redux/Reducer/Projects/project.action";

const ProjectTable = (props) => {
  const [projects, setProjects] = useState([]);    

  const reduxState = useSelector((globalStore) => globalStore.project);

    useEffect(() => {
      reduxState?.projects && setProjects(reduxState.projects.projects);
    }, [reduxState?.projects]);

    let idCount = 0;
    
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProject());
    }, []);
    const deleteItem = (_id) => {
      dispatch(deleteProject(_id));
      return;    
    }

  return (
    <>
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Project Name</TableCell>
            <TableCell className="tableCell">Description</TableCell>            
            <TableCell className="tableCell">Edit</TableCell>
            <TableCell className="tableCell">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects?.length > 0 ? (
          projects?.map((row) => (            
            <TableRow key={row.id}  className="hover:bg-gray-100">
              <TableCell className="tableCell">{idCount++}</TableCell>
              <TableCell className="tableCell">
                <div className="flex items-center">
                  <img src={row.image} alt="" className="w-44 h-20 rounded-md mr-10 fit" />
                  {row.projectName}
                </div>
              </TableCell>
              <TableCell className="tableCell w-96" style={{height: "20px"}} >
                <p className="w-64 truncate">{row.description}</p>
              </TableCell>
              {/* <TableCell className="tableCell">
                  <MdViewInAr className="w-6 h-6 text-sky-900"/>
              </TableCell> */}
              <TableCell className="tableCell">
                <Link to={`/admin/projects/${row._id}`}>
                  <BiEdit className="w-6 h-6 text-blue-600"/>
                </Link>
              </TableCell>  
              <TableCell className="tableCell">
                <Link to="/admin/projects"
                  onClick={() => deleteItem(row._id)}
                >
                  <MdDelete className="w-6 h-6 text-red-600"/>
                </Link>
              </TableCell> 
            </TableRow>
          )) 
          ) : (
            <>
              Loading ....
            </>
          )
          }
        </TableBody>
      </Table>
    </TableContainer>  
    </>
  )
}

export default ProjectTable;