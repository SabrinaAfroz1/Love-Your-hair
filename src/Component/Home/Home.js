import React from 'react';
import { Link } from 'react-router-dom';
import useReviewList from '../../hooks/useReviewList';
import Dashboard from '../Dashboard/Dashboard';
import './Home.css';

const Home = () => {
    const [review, setReview] = useReviewList();
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
                <h1 className='mb-5'>Customers Reviews(3)</h1>
                {
                    review.slice(0, 3).map(revieww => <div className='card shadow p-3 m-2  bg-body rounded item'>

                        <div className='card-body'>
                            <div className='text-center'><img src={revieww.image} alt=''></img>
                            </div>
                            <h5 className='card-title'>{revieww.name}</h5>
                            <p className='card-text text-success'>{revieww.comment}</p>
                            <p className='card-text text-success'> Rating: {revieww.rating}/5</p>

                        </div>
                    </div>
                    )

                }


            </div>
        </div>
    );
};

export default Home;