import React from 'react';

export default function Card() {
  const text = 'This is the content of the card.';
  return (
    <div className="card">
      {text}
    </div>
  );
}