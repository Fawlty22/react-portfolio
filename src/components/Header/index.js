import React, {useState} from 'react';
import Nav from '../Nav';

export default function Header({ categories, currentCategory, setCurrentCategory }) {
  
  
  

  return <div className='bg-foam flex justify-between h-1/8 text-red'>
      <h1 className='font-bold rounded  p-10'>
          <a className="hover:bg-navy hover:text-white rounded p-5" href='/'> Matthew Keys </a>
      </h1>
      <Nav 
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        />

  </div>; 
}
