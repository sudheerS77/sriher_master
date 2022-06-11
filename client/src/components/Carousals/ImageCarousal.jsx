import React from 'react';

export const LGImageCarousal = (props) => {
    return (
        <div style={{ height: "650px" }} className="W-full mt-10">
            <img src={`${props.image}`} alt="Loading Image .... " className="w-full h-full"/>
        </div>
    )
}

export const SMImageCarousal = (props) => {
    return (
        <div className="w-full h-64">
            <img src={`${props.image}`} alt="Loading Image .... " className="w-full h-full"/>
        </div>
    )
}
// export default 