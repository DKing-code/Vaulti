import React from 'react'

function TestimonalCard({imgSrc,name}) {
  return (
    <div className=''>
        <div className='w-20 h-20 rounded'>
            <img src={imgSrc} alt="test1" className='object-cover rounded-xl  '/>
        </div>
        <div className='ms-20'>
            <p className='text-xl '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates ex dignissimos sunt ducimus maiores? Adipisci magni dolor qui libero mollitia debitis tempore atque, temporibus obcaecati, reprehenderit repudiandae nobis amet quaerat.</p>

            <div className='mt-16'>
                <p className='font-semibold text-gray-50'>{name}</p>
            </div>
        </div>
        
    </div>
  )
}

export default TestimonalCard