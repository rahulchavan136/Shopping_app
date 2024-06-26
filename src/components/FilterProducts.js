import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import shopContext from '../context/shopContext';
import RatingFilter from './RatingFilter';


const FilterProducts = () => {
    const { shop, dispatch } = useContext(shopContext);

    const handleClearFilters = () => {
        dispatch({ type: 'SET_RATING_FILTER', payload: null });
    };

    const handleSortChange = (sortOption) => {
        dispatch({ type: 'SET_SORT_OPTION', payload: sortOption });
    };

    const handleToggleFastDelivery = () => {
        dispatch({ type: 'TOGGLE_FAST_DELIVERY' });
    };

    return (
        <div className="mb-3">
            <div className="card bg-dark text-white p-4">
                <h4>Filter Product</h4><hr />
                <Form.Check
                    type="radio"
                    id="ascending-price-radio"
                    label="Price: Low to High"
                    name="sortOption"
                    value="ascPrice"
                    checked={shop.sortOption === 'ascPrice'}
                    onChange={() => handleSortChange('ascPrice')}
                />
                <br />
                <Form.Check
                    type="radio"
                    id="descending-price-radio"
                    label="Price: High to Low"
                    name="sortOption"
                    value="descPrice"
                    checked={shop.sortOption === 'descPrice'}
                    onChange={() => handleSortChange('descPrice')}
                />
                <br />
                <Form.Check
                    type="checkbox"
                    id="include-out-of-stock-checkbox"
                    label="Include Out of Stock"
                /><br />
                <Form.Check
                    type="checkbox"
                    id="fast-delivery-only-checkbox"
                    label="Fast Delivery Only"
                    checked={shop.fastDeliveryOnly}
                    onChange={handleToggleFastDelivery}
                />
                <RatingFilter />
                <Button style={{ backgroundColor: "white", color: "black", fontWeight: "bold" }} className="mt-3" onClick={handleClearFilters}>
                    Clear All Filters
                </Button>
            </div>
        </div>
    );
};

export default FilterProducts;
