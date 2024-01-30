import React, { useState } from 'react'
import {MdDone} from 'react-icons/md'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  import safedepo from '../assets/images/safeDepo.png'
  import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';

function Hero() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [login,setLogin] = useState({})
    const navigate = useNavigate()
    const [error,setError] = useState({})
    const [loading,setLoading] = useState(false)


    const handleLogin = (e) => {
      setLoading(true)
      e.preventDefault()
      try {
           axios.post('https://potiveapi.onrender.com/login', login).then(resp=>{
              if(resp.data){
                  setLoading(false)
                  navigate('/secure-vault',{ state: { userData: resp.data } });
                  console.log(resp.data)
              }
          }).catch(err=>{
              setError(JSON.parse(err?.request?.responseText))
              if(loading && JSON.parse(err?.request?.responseText) == "Invalid credentials"){
                setLoading(false)
              }              
          })
      } catch (err) {
          console.log(err);
          setLoading(false)
      }
  };




  return (
    <div className='bg-gray-50 p-10'>
        <div className='md:flex items-center py-5 container mx-auto'>
            <div className='md:w-[50%] mb-5 md:mb-0'>
                <h1 className='font-bold lg:text-6xl text-4xl leading-10 mb-5 text-blue-500'>Safe Reliabile, <br /> & Trusted </h1>
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
                </div>
            </div>
            <div className=''>
                {/* <img src={safedepo} alt="" className='object-cover' width={'80%'}/> */}
                <div className='shadow-md p-10 rounded-md'>
                <form class="max-w-screen-lg my-8 mb-2 " onSubmit={handleLogin}>
                        <p className='text-center text-xl px-10 my-5'>LOGIN TO VERIFY YOUR VAULTS STORAGE WITH US</p>
                        <p className='text-red-500 text-center'>{loading  && error?.msg}</p>
                       
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
                            {loading  ? 'Verifying' : "LOG IN"}
                        </button>
                    </form>
                </div>
            </div>

        </div>


        {/* QUOTE FORM MODAL */}
        {/* <Dialog open={open} handler={handleOpen}>
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
      </Dialog> */}

    </div>
  )
}

export default Hero