import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
        {
            label: "Everett",
            y: 80000
        },
        {
            label: "Seattle",
            y: 60000
        },
        {
            label: "Lynnwood",
            y: 44000
        },
        {
            label: "Bothell",
            y: 43000
        },
        {
            label: "Mukilteo",
            y: 41000
        },
        {
            label: "Edmonds",
            y: 34000
        },

    ]

    const graphMetrics2 = [
        {
            label: "Service Plumbing",
            y: 190000
        },
        {
            label: "Bid Work HVAC",
            y: 130000
        },
        {
            label: "Service HVAC",
            y: 79000
        },
        {
            label: "Bid Work Plumbing",
            y: 78000
        },
        {
            label: "HWT Replacement",
            y: 44000
        },
        {
            label: "Maintenance",
            y: 42000
        },
        {
            label: "Material Sale",
            y: 500
        },

    ]

    const options1 = {
        animationEnabled: true,
        theme: "light2",
        axisX: {
            labelAngle: 0,
            reversed: true,
        },
        axisY: {
            title: "Revenue for November 2019",
            labelAngle: 50,
            includeZero: true,
        },
        dataPointWidth: 30,
        data: [{
            type: "bar",
            color: '#34d399',
            dataPoints: graphMetrics1
        }]
    }

    const options2 = {
        animationEnabled: true,
        theme: "light2",
        axisX: {
            labelAngle: 0,
            reversed: true,
        },
        axisY: {
            title: "Revenue for November 2019",
            labelAngle: 50,
            includeZero: true,
        },
        dataPointWidth: 30,
        data: [{
            type: "bar",
            color: '#34d399',
            dataPoints: graphMetrics2
        }]
    }

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
                        <CanvasJSChart options={options1} />
                    </div>
                    <div className='flex flex-col gap-3 w-1/2'>
                        <h1 className='font-bold text-xl'>Revenue BY Job Location</h1>
                        <CanvasJSChart options={options2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard