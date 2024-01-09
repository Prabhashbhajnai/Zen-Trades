import React from 'react'
import { Chart } from "react-google-charts";
// components
import MetricCard from '../../components/MetricCard'

const Dashboard = () => {

    const metrics = [{
        title: "Total Revenue",
        value: "406411.29",
        currency: true
    },
    {
        title: "Total Jobs Avg",
        value: "620",
        currency: true
    },
    {
        title: "Tickets Created",
        value: "655",
    },
    {
        title: "Tickets Scheduled",
        value: "735",
    },
    {
        title: "Outstanding Amount",
        value: "110448.8",
        currency: true,
        danger: true
    },
    {
        title: "Memberships Sold",
        value: "105",
    },
    {
        title: "Jobs Completed",
        value: "436",
    },
    {
        title: "Total Canceled",
        value: "65",
    },
    ]

    const graphMetrics1 = [
        ["", ""],
        [
            "Everett",
            80000
        ],
        [
            "Seattle",
            60000
        ],
        [
            "Lynnwood",
            44000
        ],
        [
            "Bothell",
            43000
        ],
        [
            "Mukilteo",
            41000
        ],
        [
            "Edmonds",
            34000
        ],

    ]

    const graphMetrics2 = [
        ["", ""],
        [
            "Service Plumbing",
            190000
        ],
        [
            "Bid Work HVAC",
            130000
        ],
        [
            "Service HVAC",
            79000
        ],
        [
            "Bid Work Plumbing",
            78000
        ],
        [
            "HWT Replacement",
            44000
        ],
        [
            "Maintenance",
            42000
        ],
        [
            "Material Sale",
            500
        ],

    ]

    const options1 = {
        chartArea: { width: "50%" },
        hAxis: {
            title: "Revenue for November 2019",
            minValue: 0,
            slantedText: true,
            slantedTextAngle: 40
        },
        colors: ['#34d399'],
        legend: "none",
        animation: {
            startup: true,
            easing: "out",
            duration: 1000,
        },

    };

    const options2 = {
        chartArea: { width: "50%" },
        hAxis: {
            title: "Revenue for November 2019",
            minValue: 0,
            slantedText: true,
            slantedTextAngle: 40
        },
        colors: ['#34d399'],
        legend: "none",
        animation: {
            startup: true,
            easing: "out",
            duration: 1000,
        },
    };

    return (
        <div className='flex flex-col w-screen h-screen bg-slate-200 px-10 py-6 gap-10'>

            {/* Company Metrics */}
            <div className='flex flex-col gap-4'>
                <h1 className='font-bold text-xl'>Company Metrics</h1>
                <div className='flex flex-wrap gap-5 w-full justify-between'>
                    {metrics.map((metric) => (
                        <MetricCard {...metric} />
                    ))}
                </div>
            </div>

            {/* Graphs */}
            <div>
                <div className='flex gap-4'>
                    <div className='flex flex-col gap-3 w-1/2'>
                        <h1 className='font-bold text-xl'>Revenue BY Job Location</h1>
                        <Chart
                            chartType="BarChart"
                            width="100%"
                            height="400px"
                            data={graphMetrics1}
                            options={options1}
                        />
                    </div>
                    <div className='flex flex-col gap-3 w-1/2'>
                        <h1 className='font-bold text-xl'>Revenue BY Job Location</h1>
                        <Chart
                            chartType="BarChart"
                            width="100%"
                            height="400px"
                            data={graphMetrics2}
                            options={options2}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard