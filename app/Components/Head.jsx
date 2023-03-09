import React from 'react'

const Head = () => {
  return (
    <header className='absolute z-50 top-0 left-0 right-0 flex items-center justify-between h-[80px]  p-5 '>
        <h2 className='text-3xl font-bold px-10 text-white relative bottom-[5px]'>Deside your own celebration</h2>
        <div className='flex text-white items-center space-x-10 mr-5'>
            <a className='nav-links text-lg' href="">Home</a>
            <a className='nav-links text-lg' href="">Services</a>
            <a className='nav-links text-lg' href="">Facebook</a>
            <a className='nav-links text-lg' href="">About Us</a>
        </div>
    </header>
  )
}

export default Head
