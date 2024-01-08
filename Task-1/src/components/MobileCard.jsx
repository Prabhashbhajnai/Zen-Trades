import React from 'react'

const MobileCard = () => {
    return (
        <div className="border items-center justify-center shadow-lg px-1 rounded-xl w-full h-56 md:w-56 transition duration-1000 hover:scale-105 flex flex-col">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <h3 className="text-md text-center font-bold">Title</h3>
                <p className="text-center">Price</p>
            </div>
        </div>
    )
}

export default MobileCard