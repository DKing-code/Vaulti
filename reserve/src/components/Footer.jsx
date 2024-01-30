import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-800 text-white md:py-10 p-2'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-10 my-20 container mx-auto'>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/7245/7245083.png" alt="logo" className='object-cover w-32'/>
            <p>Delivering Reliability <br />Right on time</p>
          </div>

          <div>
            <h2 className='md:mb-10 mb-5 font-bold md:text-2xl text-xl'>Company</h2>

            <a href=""><p className='font-light text-xl'>About</p></a>
            <a href=""><p className='font-light text-xl'>Services</p></a>
            <a href=""><p className='font-light text-xl'>Tracking</p></a>
          </div>

          <div>
            <h2 className='md:mb-10 mb-5 font-semibold md:text-2xl text-xl'>Support</h2>

            <a href=""><p className='font-light text-xl'>Contct Us</p></a>
            <a href=""><p className='font-light text-xl'>Terms of Service</p></a>
            <a href=""><p className='font-light text-xl'>Privacy Policy</p></a>
          </div>

          <div>
            <h2 className='md:mb-10 mb-5 font-bold md:text-2xl text-xl'>Contact</h2>

            <a href=""><p className='font-light text-xl'>Yogyakarata,</p></a>
            <a href=""><p className='font-light text-xl'>(021) 999 9999</p></a>
            <a href=""><p className='font-light text-xl'>Ship@gmail.com</p></a>
          </div>

        </div>
        <p className='text-center'>Allright Reserved | ShipFast Worldwide</p>
    </div>
  )
}

export default Footer