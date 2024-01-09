import React from 'react'
import { useLocation } from 'react-router-dom'

const DataDisplay = () => {
    const location = useLocation();

    const columns = location.state.columns;

    console.log(location.state);
    const res = location.state.data;
    // console.log(res);
    const products = Object.keys(res).map(key => ({ id: key, ...res[key] }))
    products.sort((a, b) => b.popularity - a.popularity);
    // console.log(products);

    return (
        <div className='w-screen p-10 flex justify-center items-center'>
            <table className='border-2 w-full'>
                <tr className='border-2'>
                    {columns.map((column, index) => (
                        <th 
                            key={index}
                            className='w-1/4 border-2'
                        >
                            {column}
                        </th>
                    ))}
                </tr>
                {products.map((product, index) => (
                    <tr className='border-2 text-wrap text-center'>
                        {columns.map((column, index) => (
                            <td 
                                key={index}
                                className='text-wrap border-2'
                            >
                                {product[column.toLowerCase()]}
                            </td>
                        ))}
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default DataDisplay