import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import './Home.css';

const Home = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 text-start '>
                    <h1 className='fw-bold fs-1 text-primary'>Your hair</h1>
                    <h1 className='fw-bold fs-1 text-success'> Your Love </h1>
                    <p>Mamaearth Onion Hair Fall Shampoo .
                        Onion Shampoo with Onion and Plant Keratin for Hair Fall Control - 250ml.Free from harmful sulfates, our Onion Shampoo has the goodness of Onion that helps in reducing hair fall and Plant Keratin that is gentle on the hair and keeps it clean, strong and nourished. </p>



                </div>
                <div className='col-md-6'>

                </div>
            </div>

        </div>
    );
};

export default Home;