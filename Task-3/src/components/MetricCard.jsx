import React from 'react'
import CountUp from 'react-countup'

const MetricCard = (props) => {
    return (
        <div className='flex flex-col bg-white md:w-[23%] p-3 border-l-8 border-emerald-400 shadow-md'>
            <h1
                className={`font-semibold text-2xl ${props.danger ? 'text-red-500' : 'text-emerald-400'}`}
            >
                {props.currency && '$'}
                <CountUp
                    start={0}
                    end={props.value}
                    duration={3}
                    decimals={props.currency ? 2 : 0}
                />
            </h1>
            <h1 className='font-medium text-md'>{props.title}</h1>
        </div>
    )
}

export default MetricCard