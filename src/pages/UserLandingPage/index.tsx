import React, { ReactElement, useContext, useState } from 'react';
import Heading from '../../components/Heading';
import Hero from '../../components/Hero';
import Products from '../../features/Products/components';
import Footer from '../../components/Footer';
import './style.scss';
import { StateContext } from '../../state/StateContext';

const UserLandingPage = (): ReactElement => {
  const [modalContent, setModalContent] = useState<JSX.Element | undefined>(undefined);

  const handleModalOpening = (content: JSX.Element) => {
    setModalContent(content);
  }

  return (
    <>
      <Heading
        setModal={handleModalOpening}
      />
      <Hero />
      <Products />
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