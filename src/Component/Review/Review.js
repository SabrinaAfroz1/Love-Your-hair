import React from 'react';

const Review = (props) => {
    const { id, name, rating, comment, image } = props.review;
    return (

        <div className='card shadow p-3 m-2  bg-body rounded item'>
            <div className='card-body'>
                <div className='text-center'><img src={image} alt=''></img>
                </div>
                <h5 className='card-title'>{name}</h5>
                <p className='card-text text-success'>{comment}</p>
                <p className='card-text text-success'> Rating: {rating}/5</p>

            </div>
        </div>
    );
};

export default Review;