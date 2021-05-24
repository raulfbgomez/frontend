import React from 'react';
import Container from './Container';

const Header = ({ children }) => (
  <section className='Header'>
    <Container>
      <div className='Header-flex'>
        <img
          src='https://avatars.githubusercontent.com/u/2994011?v=4'
          alt='raulfbgomez'
        />
        <div className='Header-info'>
          <h1 className='Header-title'>Raúl Bautista Gómez</h1>
          <h2 className='Header-job-title'>Web Developer</h2>
          <div className='Header-flex'>
            <p className='Header-phone'>phone</p>
            <p className='Header-email'>email</p>
            <p className='Header-website'>website</p>
          </div>
          <p className='Header-website'>Address</p>
          { children }
        </div>

      </div>
    </Container>
  </section>
);

export default Header;
