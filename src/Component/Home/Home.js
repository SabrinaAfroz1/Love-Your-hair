import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 text-start '>
                        <h1 className='fw-bold text-primary mt-5'>Your hair</h1>
                        <h1 className='fw-bold text-success mb-5'> Your Love </h1>
                        <h4>Mamaearth Onion Hair Fall Shampoo .
                            Onion Shampoo with Onion and Plant Keratin for Hair Fall Control - 250ml.Free from harmful sulfates, our Onion Shampoo has the goodness of Onion that helps in reducing hair fall and Plant Keratin that is gentle on the hair and keeps it clean, strong and nourished. </h4>
                    </div>
                    <div className='col-md-6'>
                        <img className='img-fluid' src="https://shop.shajgoj.com/wp-content/uploads/2020/08/Mamaearth-onion-shampoo-for-hair-growth-amp-hair-fall-control-with-onion-oil-amp-plant-keratin1.jpg" alt=" "></img>

                    </div>
                </div>
            </div>

            <div>
                <h1>Customers Reviews(3)</h1>

            </div>
        </div>
    );
};

export default Home;