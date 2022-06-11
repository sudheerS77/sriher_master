import React from 'react'


const FacultyCarousal = (props) => {
  return (
    <div className="shadow-2xl px-0 md:mx-4">
      <div className="w-60 md:w-full bg-slate-100 rounded-sm border border-blue-200">
        <div className="h-64 w-full">
          <img src={props.image} alt="Loading ... " className="w-full h-full rounded-t-sm" />
        </div>
        <div className="flex flex-col gap-0.2 items-center justify-center pb-2 w-full">
          <h4 className="text-md font-bold py-2 text-gray-900">{props.name}</h4>
          <h6 className="text-sm font-light text-blue-400">{props.deg}</h6>
          <h6 className="text-sm font-light text-blue-400">{props.position}</h6>
        </div>
      </div>
    </div>
  )
}

export default FacultyCarousal