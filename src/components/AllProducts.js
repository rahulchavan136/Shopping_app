import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleProduct from './SingleProduct';
import shopContext from '../context/shopContext';
import FilterProducts from './FilterProducts';

const AllProducts = () => {
    const { shop } = useContext(shopContext);

    // Filter products based on ratingFilter
    const filteredProducts = shop.ratingFilter
        ? shop.products.filter(product => product.rating >= shop.ratingFilter)
        : shop.products;

    return (
        <Container>
            <Row className="mb-4">
                <Col xs={12} lg={3}>
                    <FilterProducts />
                </Col>
                <Col xs={12} lg={9}>
                    <Row xs={1} md={3} lg={3} className='g-4'>
                        {filteredProducts.map((product) => (
                            <Col key={product.id} xs={12} md={4} lg={4}>
                                <SingleProduct key={product.id} product={product} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default AllProducts;