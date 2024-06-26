import React, { useReducer, useEffect } from 'react';
import { faker } from "@faker-js/faker";
import shopContext from './shopContext';

const ShopComponent = (props) => {
    faker.seed(99);
    const products = [...Array(20)].map(() => {
        return {
            id: faker.datatype.uuid(),
            productName: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.urlLoremFlickr({ category: 'food' }),
            inStock: faker.datatype.number({ min: 0, max: 7 }),
            fastDelivery: faker.datatype.boolean(),
            rating: faker.datatype.number({ min: 1, max: 5 })
        }
    });

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TO_CART':
                return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
            case 'REMOVE_FROM_CART':
                return { ...state, cart: state.cart.filter((p) => p.id !== action.payload) };
            case 'UPDATE_CART_QUANTITY':
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.productId ? { ...item, qty: action.payload.newQty } : item
                    )
                };
            case 'TOGGLE_FAST_DELIVERY':
                return { ...state, fastDeliveryOnly: !state.fastDeliveryOnly };
            case 'SET_RATING_FILTER':
                return { ...state, ratingFilter: action.payload };
            case 'SET_SORT_OPTION':
                let sortedProducts = [...state.products];
                switch (action.payload) {
                    case 'ascPrice':
                        sortedProducts.sort((a, b) => a.price - b.price);
                        break;
                    case 'descPrice':
                        sortedProducts.sort((a, b) => b.price - a.price);
                        break;
                    default:
                        break;
                }
                return { ...state, products: sortedProducts };
            default:
                return state;
        }
    };

    const [shop, dispatch] = useReducer(reducer, { products: products, cart: [], ratingFilter: null, fastDeliveryOnly: false, sortOption: null });

    useEffect(() => {
        // Set default sorting when component mounts
        dispatch({ type: 'SET_SORT_OPTION', payload: 'ascPrice' });
    }, []);

    return (
        <shopContext.Provider value={{ shop, dispatch }}>
            {props.children}
        </shopContext.Provider>
    );
};

export default ShopComponent;
