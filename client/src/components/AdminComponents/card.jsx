import React from 'react'
import { Link } from 'react-router-dom'


const Card = (props) => {
  return (
        <div className="flex flex-col gap-3 bg-gray-50 shadow-xl w-72 border px-4 py-2 rounded-md">
            <div>
                <h4 className="text-md text-gray-400 font-semibold">{props.name}</h4>
            </div>
            <div>
                <h1 className="text-4xl font-bold">{props.count}</h1>
            </div>
            <div className="flex flex-row items-center justify-between">
                <Link to={`${props.linkUrl}`}>
                    <p className="text-sm font-light border-b">{props.link}</p>
                </Link>
                <span className="w-6 h-6 bg-blue-300 p-1 rounded-md">
                    {props.icon}
                </span>
            </div>
                        
        </div>
  )
};

export default Card;