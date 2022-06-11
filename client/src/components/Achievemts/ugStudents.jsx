import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


const UGStudents = () => {
    const [ugStudents, setUgStudents] = useState([]);

    const reduxState = useSelector((globalStore) => globalStore.achievement);

    useEffect(() => {
        console.log(reduxState?.achievements);
        reduxState?.achievements && setUgStudents(reduxState.achievements.achievememts);
    }, [reduxState?.achievements]);

  return (
    <div>
        <h2 className="text-2xl font-bold md:mx-20 lg:mx-44 mb-6 mt-4 ml-3">UG Students</h2>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 md:mx-20 lg:mx-40">
            {ugStudents?.map((data) => (
                data.userType === "ugstudent" && (
                <div className="w-full lg:w-5/12 flex flex-row items-center justify-center gap-8 bg-gray-100 py-5 px-2 mx-2 md:mx-0 shadow-lg">
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 md:w-44 md:h-44">
                            <img src={`${data.image}`} alt="Loading ...." className="w-full h-full"/>
                        </div>
                        <h2 className="text-sm md:text-md font-semibold">{data.name}</h2>
                    </div>
                    <div className="w-full">
                        <p className="text-sm w-full md:text-md font-light text-gray-500">{data.description}</p>
                    </div>
                </div>
                )
            ))
            }
          

            

        </div>
    </div>
  )
}

export default UGStudents