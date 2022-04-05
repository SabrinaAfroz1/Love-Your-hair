import { useEffect, useState } from "react"

const useReviewList = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [review, setReview] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data));
    }, []);

    return [review, setReview];

}

export default useReviewList;

