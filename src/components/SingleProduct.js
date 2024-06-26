import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import shopContext from '../context/shopContext';
import Rating from './Rating';

const SingleProduct = ({ product }) => {
    const { shop, dispatch } = useContext(shopContext);
    console.log("shop==>", shop);
     return (
        <div className='col'>
            <Card className='h-100'>
                <Card.Img variant='top' src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Text className="d-flex justify-content-between align-items-center">
                        <strong>₹ {product.price}</strong>
                        <span><Rating rating={product.rating} /></span>
                    </Card.Text>
                    <Card.Text>{product.fastDelivery === true ? (<span style={{ color: "red", fontSize: "15px",fontWeight:"bold" }}>Fast Delivery</span>) : (<span style={{color:"green",fontSize:"15px",fontWeight:"bold"}}>4 days delivery</span>) }</Card.Text>
                    {shop.cart.some((item) => item.id === product.id) ? (
                        <Button variant='warning' onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: product.id })}>
                            Remove From Cart
                        </Button>
                    ) : (
                        <Button
                            variant='success'
                            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { ...product, qty: 1 } })}
                            disabled={product.inStock === 0}
                        >
                            {product.inStock === 0 ? 'Out of Stock' : 'Add to Cart'}
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProduct;
