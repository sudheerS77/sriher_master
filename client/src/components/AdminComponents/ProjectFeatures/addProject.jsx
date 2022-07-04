import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import options from "../../css/options.css";

//Redux actions
import { addProject } from "../../../Redux/Reducer/Projects/project.action";


const AddProject = () => {
    const [projects, setProjects] = useState([]);    

    const dispatch = useDispatch();
    const submit = () => {
        dispatch(
            addProject({
            ...projects,
          })
        );        
    };
  return (
    <>
        <div className="flex flex-col items-end gap-10 bg-white px-4 py-5 border shadow-xl rounded-md">
            <div className="flex flex-col w-full gap-5">
                <TextField
                    required
                    id="outlined-required"
                    label="Project name"
                    onChange={(e) => setProjects((prev) => ({...prev, projectName: e.target.value}))}                                        
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Image url"
                    onChange={(e) => setProjects((prev) => ({...prev, image: e.target.value}))}                                        
                    fullWidth
                />
                <TextField
                    required
                    id="outlined-required"
                    label="description"
                    onChange={(e) => setProjects((prev) => ({...prev, description: e.target.value}))}                                        
                    fullWidth
                    multiline
                    maxRows={4}
                />        
                                       
            </div>
            <div className="flex flex-row items-center gap-5">
                <Link to="/admin/projects"
                    className="px-2 py-1 bg-rose-700 text-gray-50 rounded-md">
                    Cancel
                </Link>
                <Link to="/admin/projects"
                    onClick={submit}
                    className="px-2 py-1 bg-green-900 text-gray-50 rounded-md"
                >
                    Submit
                </Link>
            </div>

        </div>
    </>
  )
}

export default AddProject;
