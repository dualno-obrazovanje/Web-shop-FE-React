import React, { useState } from 'react';
import Heading from '../../modules/Heading';
import Hero from '../../modules/Hero';
import Products from '../../modules/Products';
import Footer from '../../modules/Footer';
import './style.scss';

const UserLandingPage = () => {
  const [modalContent, setModalContent] = useState(null);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const handleModalOpening = (content) => {
    setModalContent(content);
  }

  return (
    <>
      <Heading
        setModal={handleModalOpening}
        cart={cart}
        handleModalOpening={handleModalOpening}
      />
      <Hero />
      <Products cart={cart} setCart={setCart} products={products} setProducts={setProducts} />
      <Footer />
      {
        modalContent && (
          <div className='backdrop'>
            {modalContent}
          </div>
        )
      }
    </>
  );
};

export default UserLandingPage;