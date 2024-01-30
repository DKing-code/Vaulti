import React, { useState } from 'react'
import {MdDone} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  import safedepo from '../assets/images/safeDepo.png'

function Hero() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);



  return (
    <div className='bg-gray-50 p-10'>
        <div className='md:flex items-center py-5 container mx-auto'>
            <div className='md:w-[50%] mb-5 md:mb-0'>
                <h1 className='font-bold lg:text-6xl text-4xl leading-10 mb-5 '>Safe Reliabile, <br /> & Trusted </h1>
                <p className='leading-8 text-xl font-light mb-6 text-gray-500'>Be Always on time in every place where people <br /> need your product.</p>
                <div>
                    <p className='mb-6 text-xl inline-flex items-center gap-4'><MdDone size={25}/>Quick and easy reservation</p> <br />
                    <p className='mb-6 text-xl inline-flex items-center gap-4'> <MdDone size={25}/>Fast and reliable shipment</p> <br />
                    <p className='mb-6 text-xl inline-flex items-center gap-4'><MdDone size={25}/>  Worldwide coverage</p>
                </div>

                <div className='md:inline-flex gap-6'>
                    <Link to={'/tracking'}>
                        <button className='px-6 py-3 bg-blue-900 text-white font-semibold rounded shadow-md'>Shipment Tracking</button>
                    </Link>
                    
                    {/* <button onClick={handleOpen} className='px-6 py-3 bg-blue-50 text-black font-semibold rounded _hover:bg-blue-500'>Request Quote</button> */}
                </div>
            </div>
            <div className=''>
                <img src={safedepo} alt="" className='object-cover' width={'80%'}/>
            </div>

        </div>


        {/* QUOTE FORM MODAL */}
        <Dialog open={open} handler={handleOpen}>
        <DialogHeader>REQUEST A PICKUP</DialogHeader>
        <small className='px-5'>We can pick your parcel anywhere around you</small>
        <DialogBody>
          T
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>

    </div>
  )
}

export default Hero