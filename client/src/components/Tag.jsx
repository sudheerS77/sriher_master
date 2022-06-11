import React from 'react'

const Tag = (props) => {
  return (
    <>
        <div className="mt-10 bg-teal-50 border border-gray-100 shadow-sm py-3 flex items-end justify-end rounded-md">
            <h1 className="text-xl text-grey-100 pr-4 font-light">{props.eventName}</h1>
        </div>
    </>
  )
}

export default Tag