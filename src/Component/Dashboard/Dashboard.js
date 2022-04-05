import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (

        <div className='row'>
            <div className='col-md-6'>
                <h2>MONTH WISE SELL</h2>
                <LineChart width={600} height={500} data={data}>
                    <Line type="monotone" dataKey={'sell'}></Line>
                    <XAxis dataKey={'month'} />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />

                </LineChart>
            </div>

            <div className='col-md-6'>
                <h2> MONTH WISE INVESTMENT </h2>
                <AreaChart width={600} height={500} data={data}>
                    <Area type="monotone" dataKey={'investment'}></Area>
                    <XAxis dataKey={'month'} />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                </AreaChart>
            </div>
        </div>

    );
};

export default Dashboard;