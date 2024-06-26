import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { MdOutlineStarBorder } from 'react-icons/md';

const Rating = ({ rating }) => {
    const defaultRating = 5;
    const filledStars = rating;
    const emptyStars = defaultRating - filledStars;

    return (
        <div>
            {[...Array(filledStars)].map((_, index) => (
                <AiFillStar key={index} style={{ color: 'gold' }} />
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <MdOutlineStarBorder key={index} />
            ))}
        </div>
    );
};

export default Rating;
