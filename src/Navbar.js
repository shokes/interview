import logo from '../src/images/logo.png';
import { useState } from 'react';
import React from 'react';
import { Zoom } from 'react-reveal';

const Navbar = function () {
  const [status, setStatus] = React.useState(false);
  function handleChange(e) {
    setStatus(e.target.checked);
  }
  return (
    <section className='container'>
      <nav className='flex justify-between items-center pt-7'>
        <div className='font-semibold'>
          SELL<span className='text-red-700'>C</span>OINS
        </div>
        <ul className='hidden lg:flex lg:gap-x-6 '>
          <li className='hover:text-red-700 cursor-pointer ease-in duration-300'>
            Home
          </li>
          <li className='hover:text-red-700 cursor-pointer ease-in duration-300'>
            Buy crypto
          </li>
          <li className='hover:text-red-700 cursor-pointer ease-in duration-300'>
            Sell crypto
          </li>
          <li className='hover:text-red-700 cursor-pointer ease-in duration-300'>
            Login
          </li>
        </ul>
        <div className='hidden lg:flex lg:items-center lg:gap-x-4'>
          <div className='hover:text-red-700 cursor-pointer ease-in duration-300'>
            Sign in
          </div>
          <button className='border border-red-700 px-6 py-2 rounded-lg hover:bg-red-700 text-white ease-in duration-300'>
            Get started
          </button>
        </div>
        <label htmlFor='check' className='flex lg:hidden menu'>
          <input
            type='checkbox'
            id='check'
            value={status}
            onChange={(e) => handleChange(e)}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </nav>

      {status && (
        <Zoom>
          <div className='z-40 text-center mx-auto lg:hidden grid grid-row-2 gap-4 justify-center p-4 rounded-lg shadow-lg absolute  bg-red-700 right-20 mt-4 scale-in-center'>
            <div className='text-white text-bold'>
              <ul className='flex flex-col gap-y-1 '>
                <li className='hover:text-black cursor-pointer ease-in duration-300'>
                  Home
                </li>
                <li className='hover:text-black cursor-pointer ease-in duration-300'>
                  Buy crypto
                </li>
                <li className='hover:text-black  cursor-pointer ease-in duration-300'>
                  Sell crypto
                </li>
                <li className='hover:text-black  cursor-pointer ease-in duration-300'>
                  Login
                </li>
              </ul>

              <button className=' px-6   hover:text-black  text-white ease-in duration-300'>
                Get started
              </button>
            </div>
          </div>
        </Zoom>
      )}
    </section>
  );
};

export default Navbar;
