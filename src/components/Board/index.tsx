"use client";
import React from 'react';
import Square from '../Square';

const Board = () => {
  return (
  <div className='grid gap-0'>
    <div className='grid grid-cols-3'>
      <Square />
      <Square />
      <Square />
    </div>
    <div className='grid grid-cols-3'>
      <Square />
      <Square />
      <Square />
    </div>
    <div className='grid grid-cols-3'>
      <Square />
      <Square />
      <Square />
    </div>
  </div>
  )
}

export default Board;