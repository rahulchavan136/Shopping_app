import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
// import ButtonHOC from './HOC/ButtomHOC';
// import ButtonComponent from './HOC/ButtonComponent';
// import { MyComponent } from './components/CSSNodule/MyComponent';
// const EnhancedButton = ButtonHOC(ButtonComponent);

function App() {
    // const handleButtonClick = () => {
    //     console.log('Button clicked!');
    // };
    return (
        // <EnhancedButton onClick={handleButtonClick}>Click me</EnhancedButton>
        <BrowserRouter>
            {/* <MyComponent /> */}
            <Header />
            <Container>
                <Routes>
                    <Route exact path='/' element={<AllProducts />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
