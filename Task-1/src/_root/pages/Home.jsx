import React, { useEffect, useState } from 'react'

// Components
import MobileCard from '../../components/MobileCard'
import LoadMore from '../../components/LoadMore'

const Home = () => {
    const [mobiles, setMobiles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')

                const res = await data.json()

                // convert object of objects to array of objects
                const mobileArr = Object.keys(res.products).map(key => ({ id:key, ...res.products[key] }))

                // sort by popularity
                mobileArr.sort((a, b) => b.popularity - a.popularity);
                
                setMobiles(mobileArr)
            } catch (error) {
                console.log(error);
            }

        }

        fetchData()
    }, [])

    return (
        <div className='flex flex-wrap gap-5'>
            {
                mobiles.length === 0 ? <LoadMore /> : (
                    mobiles.map((mobile) => (
                        <MobileCard {...mobile} key={mobile.id} />
                    ))
                )
            }
            <MobileCard />
        </div>
    )
}

export default Home