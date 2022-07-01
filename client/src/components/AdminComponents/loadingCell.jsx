import React, { useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import TableCell from "@mui/material/TableCell";


const LoadingCell = () => {
    let [loading, setLoading] = useState(true);

    const override =`
        display: flex;
        align-items: center;
        justify-content: center;    
        border-color: red;
    `;
    return (
        <>
            <TableCell>
                <BarLoader loading={loading} css={override} size={150}/>
            </TableCell>
        </>
    )
}

export default LoadingCell;