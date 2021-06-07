import React from 'react';
// import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/Waves.mp4' autoPlay loop muted />
      <h1>Kacher Dorja</h1>
      <p text-align ='center'>Company reviews, salaries and more.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         SIGN IN
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SIGN UP
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
