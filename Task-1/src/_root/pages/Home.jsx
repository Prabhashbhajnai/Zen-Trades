import React from 'react'

// Components
import MobileCard from '../../components/MobileCard'

const Home = () => {
    return (
        <div className='flex flex-wrap gap-5'>
            <MobileCard />
            <MobileCard />
        </div>
    )
}

export default Home