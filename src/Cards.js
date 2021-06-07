import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Do you work at any of these companies?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/google-logo.jpg'
              text='Google'
              label='IT'
              path='/services'
            />
            <CardItem
              src='images/img-2.png'
              text='Facebook'
              label='IT'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/amazon-logo.png'
              text='Amazon'
              label='IT'
              path='/services'
            />
            <CardItem
              src='images/apple-logo.png'
              text='Apple'
              label='IT'
              path='/products'
            />
            <CardItem
              src='images/uber-logo.png'
              text='Uber'
              //text-align = 'center'
              label='Transport'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
