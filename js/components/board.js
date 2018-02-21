import React from 'react';
import Card from './card';
import List from './list';

export default function Board(props) {
  const titles = ['TitleA', 'TitleB', 'TitleC'];
  return ( 
    <div className='board-list'>
        <h1 className='board-title'>{props.title}</h1>
          <h3 className='board-list-titles'>{titles}</h3>
          <List />
            <h3 className='board-list-titles'>{titles}</h3>
          <List />
            <h3 className='board-list-titles'>{titles}</h3>
          <List />
    </div>
  );
}