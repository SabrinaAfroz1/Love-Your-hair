import React from 'react';
import useReviewList from '../../hooks/useReviewList';
import Review from '../Review/Review';


const Reviews = () => {
    const [review, setReview] = useReviewList();

    return (
        <div>
            {
                review.map(revieww => <Review
                    key={revieww.id}
                    review={revieww}></Review>)
            }
        </div>
    );
};

export default Reviews;