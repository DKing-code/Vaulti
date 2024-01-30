import React from 'react'

function TestimonalCard({imgSrc,name,comment}) {
  return (
    <div className=''>
        <div className='w-20 h-20 bg-gray-300 rounded-lg'>
            <img src={''} alt="test1" className='object-cover rounded-xl  '/>
        </div>
        <div className='ms-20'>
            <p className='text-xl font-light '>{comment}</p>

            <div className='mt-16'>
                <p className='font-light text-gray-50'>{name}</p>
            </div>
        </div>
        
    </div>
  )
}

export default TestimonalCard