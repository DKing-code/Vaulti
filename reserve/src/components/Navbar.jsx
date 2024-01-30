import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import axios from 'axios'
import lock from '../assets/images/lock.png'

function Navbar() { 
    const [open, setOpen] = useState(false);
    const [login,setLogin] = useState({})
    
    const handleOpen = () => setOpen(true);

    return (
        <div className=' sticky top-0 bg-white z-[10000] '>
            <div className='md:flex justify-between items-center py-5 mx-5 container md:mx-auto'>
                <div className='w-20'>
                    <img src={lock} alt="logo" width={'100px'} className='object-cover' />
                </div>

                <div className='inline-flex gap-5'>
                    <Link to='/'>Home</Link>
                    <Link to='/tracking'>Tracking</Link>
                    <Link to="#service">Service</Link>
                    <Link to="/about">About</Link>
                </div>


                <div className='mt-5 md:mt-0 md:block hidden '>
                    {/* <Link>
                        <button className='px-5 py-2 border-blue-600 border-2 rounded font-semibold text-blue-600 hover:bg-blue-50' onClick={handleOpen}>LOGIN</button>
                    </Link> */}
                </div>
            </div>

            {/* <Dialog open={open} size='xs'>
                <DialogBody>
                    <form class="max-w-screen-lg mt-8 mb-2 " onSubmit={()=>handleLogin}>
                        <p className='text-center text-xl px-10'>LOGIN TO VERIFY YOUR VAULTS STORAGE WITH US</p>
                        <div class="flex flex-col gap-6 mb-1 mt-5">
                            <h6
                                class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                Your Username
                            </h6>
                            <div class="relative h-11 w-full min-w-[200px]">
                                <input placeholder="johnson"
                                onChange={e=>setLogin({...login,username:e.target.value})}
                                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" 
                                    required
                                    />
                        
                            </div>
                            <h6
                                class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                Password
                            </h6>
                            <div class="relative h-11 w-full min-w-[200px]">
                                <input type="password" placeholder="********"
                                    class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" 
                                    required
                                    onChange={e=>setLogin({...login,password:e.target.value})}
                                    />
                            </div>
                        </div>
                        
                        <button
                            class="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit">
                            LOG IN
                        </button>
                      
                    </form>
                </DialogBody>

            </Dialog> */}

        </div>
    )
}

export default Navbar