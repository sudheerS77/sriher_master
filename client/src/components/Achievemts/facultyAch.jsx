import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';



const FacultuAch = () => {
    const [faculty, setFaculty] = useState([]);

    const reduxState = useSelector((globalStore) => globalStore.achievement);

    useEffect(() => {
        console.log(reduxState?.achievements);
        reduxState?.achievements && setFaculty(reduxState.achievements.achievememts);
    }, [reduxState?.achievements]);
  return (
    <div>
        <h1 className="text-2xl font-bold md:mx-20 lg:mx-44 mb-3 ml-3">Faculty</h1>
        <div className="md:mx-20 lg:mx-60 flex flex-col items-center justify-center gap-5 mb-10">
        {faculty?.map((data) => (
                data.userType === "faculty" && (
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-around bg-gray-100 rounded-md py-4 md:py-2 rounded-lg mx-2 shadow-xl">
                        <div className="w-full md:w-72 h-64 px-4 mb-2 md:py-4">
                            <img src={`${data.image}`} alt="Loading ..." className="w-full h-full rounded-md" />
                        </div>
                        <div className="md:w-3/6 lg:w-3/5 mx-5 md:mx-0 flex flex-col items-start gap-1">
                            <h2 className="text-xl font-semibold">{data.name}</h2>                    
                            <h4 className="text-md text-indigo-400 font-light">{data.degree}</h4>
                            <h4 className="text-md text-indigo-400 font-light">{data.position}</h4>            
                            <p className="text-sm font-light text-gray-500">{data.description}</p>
                        </div>
                    </div>
                )))}                                    
        </div>
    </div>
  )
}

export default FacultuAch