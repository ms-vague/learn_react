import React from 'react';
import Card from './card';

export default function List(props) {
  return (
    <div className='card-list'> 
        <Card />
          <h3 className='card-title'>{props.title}</h3>
          <h3 className='card-content'>{props.cards}</h3>
        <Card />
          <h3 className='card-title'>{props.title}</h3>
          <h3 className='card-content'>{props.cards}</h3>
        <Card />
          <h3 className='card-title'>{props.title}</h3>
          <h3 className='card-content'>{props.cards}</h3>
    </div>
  );
}