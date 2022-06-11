import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

//Redux actions
import { getSpecificProject, updateProjectData } from "../../../Redux/Reducer/Projects/project.action";


const UpdateProject = () => {   
    const { type } = useParams();
    const [projects, setProjects] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificProject(type));
    }, [])

    const reduxState = useSelector((globalStore) => globalStore.project);

    useEffect(() => {
      reduxState?.projects && setProjects(reduxState.projects.projects);
    }, [reduxState?.projects.projects]);
    const submit = () => {
        dispatch(
            updateProjectData({
            ...projects,
          })
        );
    } 

    
  return (
    <>
        <div className="flex flex-col items-end gap-10 bg-white px-4 py-5 border shadow-xl rounded-md">
            <div className="flex flex-col w-full gap-5">
                <TextField
                    required
                    id="outlined-required"
                    helperText="Project name"
                    value={projects.projectName}
                    onChange={(e) => setProjects((prev) => ({...prev, projectName: e.target.value}))}                                        
                />
                <TextField
                    required
                    id="outlined-required"
                    helperText="Image url"
                    value={projects.image}
                    onChange={(e) => setProjects((prev) => ({...prev, image: e.target.value}))}                                        
                    fullWidth
                />
                <TextField
                    required
                    id="outlined-required"
                    helperText="description"
                    value={projects.description}
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
                    Update
                </Link>
            </div>

        </div>
    </>
  )
}

export default UpdateProject;
