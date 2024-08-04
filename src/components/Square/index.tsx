import React from 'react';
import { useState } from 'react';

interface Props {
}

const Square = () => {
  const [squareValue, setSquareValue]= useState(""); 

  function handleClick (){
    setSquareValue("X");
  }
  return (
    <button 
      className="cursor-pointer w-32 border-2 border-black h-32" 
      onClick={handleClick}
    >
      {squareValue}
    </button> 
  );
}

export default Square;