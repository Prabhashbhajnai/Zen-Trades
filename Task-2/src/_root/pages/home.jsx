import React, { useState } from 'react'
import Duallist from 'react-duallist';

// styles
import './react_duallist.css'

const home = () => {
    const available = [
        { label: 'Alabama', value: 'AL' },
        { label: 'California', value: 'CA' },
    ];

    const [selected, setSelected] = useState([]);

    return (
        <div className='flex flex-col p-10 gap-6'>
            <h3 className='font-semibold text-lg'>Import Products</h3>
            <div className='flex flex-row gap-3 w-full h-1/2'>

                {/* File Selector Box */}
                <div className='w-1/2 border shadow-sm p-10'>
                    <div className='flex flex-row gap-16'>
                        <h3>Step-1: </h3>
                        <div className='gap-3'>
                            <h3>Select File</h3>
                            <input type="file" id="myfile" name="myfile" />
                            <h2 className='mt-10'>Supported File Type(s): .JSON</h2>
                        </div>
                    </div>
                </div>

                {/* Format Specification Box */}
                <div className='w-1/2 border shadow-sm p-10 justify-between'>
                    <div className='flex flex-col gap-5 w-full'>
                        <h3>Step-2: Specify Format</h3>
                        <div className='flex flex-row full px-16'>
                            <div className='flex flex-col w-1/2'>
                                <label for="fileType">File Type</label>
                                <label for="encodeing">Character Encoding</label>
                                <label for="delimiter">Delimiter</label>
                                <label for="header">Has Header</label>

                            </div>
                            <div className='flex flex-col w-1/2'>
                                <select name="fileType" id="fileType">
                                    <option value="csv">csv</option>
                                    <option value="json">json</option>
                                </select>
                                <select name="encodeing" id="cars">
                                    <option value="UTF-8">UTF-8</option>
                                </select>
                                <select name="delimiter" id="cars">
                                    <option value="comma">comma</option>
                                </select>
                                <input type="checkbox" id="header" name="header" value={true} className='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Display handling box */}
            <div className='w-full border shadow-sm p-10'>
                <div className='flex flex-row gap-5 w-full'>
                    <h3>Step-3:</h3>
                    <div className='flex flex-col w-1/2 gap-2'>
                        <h3>Display Handler</h3>
                        <h3>Select the fields to be displayed</h3>
                        {/* <Duallist
                            available={available}
                            // selected={true}
                            // onSelect={true}
                            // onMove={this.onMove}
                            sortable={false}
                            searchable={false}
                            className='w-full'
                        /> */}
                        <Duallist
                            available={available}
                            selected={selected}
                            // onMove={this.onMove}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default home