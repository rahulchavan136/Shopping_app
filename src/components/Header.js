import React, { useContext } from 'react';
import { Badge, Button, Container, Dropdown, Navbar, Row, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import shopContext from '../context/shopContext';

const Header = () => {
    const { shop, dispatch } = useContext(shopContext);

    return (
        <Navbar bg='dark' variant='dark' expand='lg' className='mb-4'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={8} className='d-flex align-items-center'>
                        <Navbar.Brand href='/'>Flix Shop</Navbar.Brand>
                    </Col>
                    <Col md={4} className='d-flex align-items-center justify-content-end'>
                        <Dropdown>
                            <Dropdown.Toggle variant='success'>
                                <FaShoppingCart />
                                <Badge bg='danger' className='ms-2'>{shop.cart.length}</Badge>
                            </Dropdown.Toggle>
                            
                            <Dropdown.Menu className='dropdown-menu-start'>
                                {shop.cart.map((item) => (
                                    <Dropdown.Item key={item.id} className='d-flex align-items-center'>
                                        <img src={item.image} alt='product' className='me-2' style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                        <div>
                                            <strong>{item.productName}</strong>
                                            <br />
                                            <span>${item.price}</span>
                                        </div>
                                        <MdDelete className='ms-auto' style={{ cursor: 'pointer' }} onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })} />
                                    </Dropdown.Item>
                                ))}
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    <Link to='/cart'>
                                        <Button variant='warning'>Go To Cart</Button>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Header;
