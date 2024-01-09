import React from 'react'
import { useLocation } from 'react-router-dom'

const DataDisplay = () => {
    const location = useLocation();

    console.log(location.state);

    return (
        <div>DataDisplay</div>
    )
}

export default DataDisplay