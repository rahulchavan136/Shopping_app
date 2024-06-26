import React, { useContext } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import shopContext from '../context/shopContext';

const RatingFilter = () => {
    const { shop, dispatch } = useContext(shopContext);

    const handleSetRatingFilter = (rating) => {
        const newFilter = shop.ratingFilter === rating ? null : rating;
        dispatch({ type: 'SET_RATING_FILTER', payload: newFilter });
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    onClick={() => handleSetRatingFilter(i)}
                    style={{ cursor: 'pointer', marginRight: '5px' }}
                >
                    {i <= (shop.ratingFilter || 0) ? <AiFillStar /> : <AiOutlineStar />}
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="card bg-dark text-white mt-3">
            <h6>Rating Filter : {renderStars()} </h6>
         </div>
    );
};

export default RatingFilter;
