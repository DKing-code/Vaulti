import React from 'react'
import {FaShip,FaCar} from 'react-icons/fa'
import {MdLocalShipping,MdAirplanemodeActive} from 'react-icons/md'
import bullion from '../assets/images/bullion.jpg'
import gem from '../assets/images/gem.jpg'
import money from '../assets/images/money.jpg'
import docs from '../assets/images/personal-doc.jpeg'



const Item = ({iconName,title,text})=>{
    return(
        <div className='text-center p-5 flex flex-col items-center shadow-md rounded-md md:w-[25%]'>
            <div className='text-blue-900'>
                <img src={iconName} className='md:h-[250px] '/>
            </div>
            <p className='font-semibold text-2xl text-blue-900 my-3'>{title}</p>
            <p className='text-lg font-light'>{text}</p>
        </div>
    )

}

function Services() {
    return (
        <div className='container mx-auto py-10' id='service'>
            <div className='text-center py-10'>
                <h1 className='font-light text-6xl mb-4'>Our Services</h1>
                <p className='text-xl  '>What We Provide</p>
            </div>

            <div className='my-[20px] md:flex md:gap-2'>
                <Item title='CASH STORAGE' text='We have access to over a ten million square feet of storage space in strategic partnership locations' iconName={money}/>
                <Item title='GEM STORAGE' text='Jewellery Storage can be difficult, as you often want to wear it. It is ideal to consolidate the storage of your jewels' iconName={gem}/>
                <Item title='PRECIOUS METAL' text='Our security is a purpose built facility is built to hold the weight of bullion as well as any other items that you need to keep safe' iconName={bullion}/>
                <Item title='PERSONAL DOCUMENTS' text='Container ships,both full container and LCL to favorite areas' iconName={docs}/>
                
            </div>

        </div>
    )
}

export default Services