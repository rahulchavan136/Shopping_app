import React, { useContext } from 'react';
import { Button, Col, Container, Image, ListGroup, Row, Dropdown, Card } from 'react-bootstrap';
import shopContext from '../context/shopContext';

const Cart = () => {
    const { shop, dispatch } = useContext(shopContext);

    const handleDropdownChange = (productId, newQty) => {
        dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { productId, newQty: parseInt(newQty) } });
    };

    // Function to calculate total amount
    const calculateTotal = () => {
        let total = 0;
        shop.cart.forEach(item => {
            total += item.price * item.qty;
        });
        return total.toFixed(2);
    };

    return (
        <div className='py-5'>
            <Container>
                <h1 className='mb-4'>Shopping Cart</h1>
                <ListGroup variant='flush'>
                    {shop.cart.map((item) => (
                        <ListGroup.Item key={item.id} className='mb-3'>
                            <Row className='align-items-center'>
                                <Col xs={12} md={2}>
                                    <Image src={item.image} fluid />
                                </Col>
                                <Col xs={12} md={3}>
                                    <h6>{item.productName}</h6>
                                </Col>
                                <Col xs={12} md={2}>
                                    ₹ {item.price}
                                </Col>
                                <Col xs={12} md={2}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='light'>
                                            {item.qty}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {[...Array(item.inStock).keys()].map((qty) => (
                                                <Dropdown.Item key={qty + 1} onClick={() => handleDropdownChange(item.id, qty + 1)}>
                                                    {qty + 1}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col xs={12} md={2}>
                                    <strong>Total:</strong> ₹ {(item.price * item.qty).toFixed(2)}
                                </Col>
                                <Col xs={12} md={1}>
                                    <Button variant='danger' onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>
                                        Remove
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                {/* Display total amount */}
                <hr />
                <Card className='mt-4'>
                    <Card.Body>
                        <Row>
                            <Col xs={6}>
                                <h6>Subtotal:</h6>
                                <h6>Shipping:</h6>
                                <strong>Final Amount:</strong>
                            </Col>
                            <Col xs={6} className='text-end'>
                                <h6>₹ {calculateTotal()}</h6>
                                <h5>free</h5>
                                <h6>₹ {calculateTotal()}</h6>
                                <Button variant='warning' size='sm' className='mt-3'>Proceed to Checkout</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Cart;
