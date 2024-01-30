import React from 'react'


const Card=({img,country})=>{
  return(
    <div className='rounded-lg shadow-2xl overflow-hidden group'>
      <div className='w-ful overflow-hidden'>
        <img src={img} alt="" className='object-contain w-[100%] group-hover:scale-[180%] group-hover:transition-all' />
      </div>

      <div className='p-4'>
        <div className='flex justify-between'>
          <p className='font-semibold text-gray-600 text-xl'>{country}</p>
          {/* <p>Free Pick Up</p> */}
        </div>
      </div>
    </div>
  )
  
}

function Featured() {
  return (
    <div className='container md:mx-auto  w-full py-10'>
      <div className='md:flex justify-between items-center my-10 mdmx-10'>
        <div className='p-5'>
          <p>Feature</p>
          <h1 className='font-bold text-4xl'>Shipping</h1>
        </div>

      </div>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-5 p-5'>
        <Card img='https://images.unsplash.com/photo-1605732562742-3023a888e56e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' country={'Canada'}/>
        <Card img='https://images.unsplash.com/photo-1600633532411-13ed06f7bcc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' country={'U.S.A'}/>
        <Card img='https://images.unsplash.com/photo-1615044606239-76ef89b01a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' country={'China'}/>
      </div>
    </div>
  )
}

export default Featured