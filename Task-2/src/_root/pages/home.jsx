import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DualListBox from 'react-dual-listbox';

// styles
import './react-dual-listbox.css';

const home = () => {
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState([]);
    const [productArray, setProductArray] = useState([]);

    const navigate = useNavigate();

    const handleCancel = (e) => {
        console.log(e.target.value);
        e.target.value = null;
    }

    const handleSubmit = async () => {
        if (selected.length === 0) {
            alert('Please select atleast one field to display');
            return;
        }

        console.log(productArray);

        navigate(
            '/display',
            {
                state: {
                    data: productArray,
                    columns: selected,
                }
            }
        )
    }

    const handleChange = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = event => {
            const parsedData = JSON.parse(event.target.result);
            // console.log(parsedData.products);
            const keysOfProducts = Object.keys(parsedData.products[12]);
            // console.log({ "keysOfProducts": keysOfProducts });

            setProductArray(parsedData.products)

            const options = keysOfProducts.map(item => {
                return { label: item.charAt(0).toUpperCase() + item.slice(1), value: item.toUpperCase() };
            });

            setOptions(options);
        };
    };

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
                            <input type="file" id="myfile" name="myfile" onChange={handleChange} />
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
                                    <option value="json">json</option>
                                    <option value="csv">csv</option>
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
                        <DualListBox
                            options={options}
                            selected={selected}
                            onChange={(newValue) => setSelected(newValue)}
                            icons={{
                                moveLeft: <span className="fa fa-chevron-left" />,
                                moveAllLeft: [
                                    <span key={0} className="fa fa-chevron-left" />,
                                    <span key={1} className="fa fa-chevron-left" />,
                                ],
                                moveRight: <span className="fa fa-chevron-right" />,
                                moveAllRight: [
                                    <span key={0} className="fa fa-chevron-right" />,
                                    <span key={1} className="fa fa-chevron-right" />,
                                ],
                                moveDown: <span className="fa fa-chevron-down" />,
                                moveUp: <span className="fa fa-chevron-up" />,
                                moveTop: <span className="fa fa-double-angle-up" />,
                                moveBottom: <span className="fa fa-double-angle-down" />,
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className='flex gap-2 justify-end items-end'>
                <button
                    className='bg-green-500	text-white px-6 py-2 rounded-lg'
                    onClick={handleSubmit}
                >
                    Next
                </button>
                <button
                    className='	text-red-500 px-6 py-2 rounded-lg'
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </div >
    )
}

export default home