import React from 'react'
import {BsPeopleFill} from  'react-icons/bs';

const Status = () => {
  return (
    <div>
        <div className="flex flex-row items-center justify-around gap-100 mx-4 md:mx-12 lg:mx-40 bg-gray-300 py-10 my-10 shadow-lg rounded-md">
            <div className="flex flex-col items-center justify-center">
                <div className="w-10 h-10 md:w-16 md:h-16 border border-gray-300 rounded-full p-2">
                    <BsPeopleFill className="w-full h-full text-blue-500"/>
                </div>
                <h3 className="text-sm md:text-lg font-light">23</h3>
                <h4 className="text-lg md:text-xl font-light">UG Students</h4>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="w-10 h-10 md:w-16 md:h-16 border border-gray-300 rounded-full p-2">
                    <BsPeopleFill className="w-full h-full"/>
                </div>
                <h3 className="text-sm md:text-lg font-light">23</h3>
                <h4 className="text-lg md:text-xl font-light">PG Students</h4>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="w-10 h-10 md:w-16 md:h-16 border border-gray-300 rounded-full p-2">
                    <BsPeopleFill className="w-full h-full"/>
                </div>
                <h3 className="text-sm md:text-lg font-light">23</h3>
                <h4 className="text-lg md:text-xl font-light">Faculty</h4>
            </div>
        </div>
    </div>
  )
}

export default Status;