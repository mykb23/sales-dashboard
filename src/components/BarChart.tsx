import React from 'react'
import { Bar } from "react-chartjs-2";

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        data: [4500, 7000, 5500, 3000, 7000, 6000, 4000, 6000, 4000, 6000, 4000, 7000],
        borderRadius: 30,
        borderWidth: .9,
        borderSkipped: true,
        minBarLength: 4,
        barPercentage: .3,
        backgroundColor: 'rgb(64,110,249)',
        skipNull: true,
    }],
}
const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
    },
    animation: {
        duration: 0
    },
    scales: {
        x: {
            color: "transparent",
            grid: {
                drawBorder: false,
                show: false,
                display: false
            }
        },
        y: {
            color: "transparent",
            beginAtZero: true,
            suggestedMin: 0,
            skipNull: true,
            grid: {
                drawBorder: false,
                display: false,
                show: false,
            },
            ticks: {
                beginAtZero: true,
                stepSize: 6,
                maxTicksLimit: 5,
                min: 0,
                max: 10000,
                callback: (value: any, index: any) => {
                    let values = ['0', '2k', '6k', '10k'];
                    return values[index];
                }
            },
        },
    }
}
export default function BarChart() {
    return (
        <>
            <Bar data={data} options={options} style={{ width: '100%', maxHeight: '120px', }} />
        </>
    )
}