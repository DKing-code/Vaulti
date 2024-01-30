import React, { useState } from "react";
import {
  Input, Button, Stepper, Step, Typography, Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  TimelineHeader,
} from "@material-tailwind/react";
import { HomeIcon, ShieldCheckIcon, UserIcon, ClipboardDocumentListIcon, TruckIcon, CubeIcon } from "@heroicons/react/24/outline";
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid"

import axios from 'axios'


function Tracking() {
  const [trackNo, settrackNo] = useState("");
  const onChange = ({ target }) => settrackNo(target.value);
  const [entry, setEntry] = useState([])
  const [shipping, setShipping] = useState([])
  const [loading, setLoading] = useState(true)


  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);


  const handleTrackSubmit = () => {
    try {
      axios.get(`https://potiveapi.onrender.com/getShipping/${trackNo}`).then(resp => {
        setActiveStep(resp.data.getShipping[0]?.stepNo)
        setEntry(resp.data.getEntry)
        setShipping(resp.data.getShipping)
        // settrackNo('')
        setLoading(false)
      }).catch(err => {
        console.log(err)
      })
    } catch (err) {
      console.log(err)
    }
  }



  return (
    <div className="container md:mx-auto p-4">
      <div className="text-center p-5 bg-blue-400 text-white mb-5">
        <p className="text-xl">Parcel Tracking</p>
      </div>
      <div className="relative flex md:mx-auto w-full max-w-[24rem] my-5" size="lg">
        <Input
          type="text"
          label="Enter Tracking Number"
          value={trackNo}
          maxLength={6}
          minLength={6}
          onChange={onChange}
          className="pr-20 uppercase"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          color={trackNo ? "blue" : "blue-gray"}
          disabled={!trackNo}
          className="!absolute right-1 top-1 rounded"
          onClick={handleTrackSubmit}
        >
          Track
        </Button>
      </div>


      {/* STEPPER */}
      {
        shipping.length >= 1 &&

        <div className="w-full p-10 bg-gray-100 rounded-md">
          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            <Step>
              <ClipboardDocumentListIcon className="h-5 w-5" />
            </Step>
            <Step >
              <CubeIcon className="h-5 w-5" />
            </Step>

            <Step>
              <TruckIcon className="h-5 w-5" />
            </Step>
            <Step>
              <ShieldCheckIcon className="h-5 w-5" />
            </Step>
            <Step >
              <HomeIcon className="h-5 w-5" />
            </Step>
          </Stepper>
        </div>
      }

      


      {/*   SHIPPING PROCESS DETAILS */}
      <div className="md:flex gap-x-10 flex-wrap my-5">
        {/* timeline */}
        {entry.length >= 1 &&
          <div className="md:w-[50%] ">
            <Timeline>
              {
                entry.map((e,index) => (
                  <TimelineItem key={index} className="h-28">
                    {index <=1? <TimelineConnector />: '' }
                    <TimelineHeader className={`relative rounded-xl border border-${e.color} bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5`}>
                      <TimelineIcon className="p-3" variant="ghost" color="green">
                        <TruckIcon className="h-5 w-5" />
                      </TimelineIcon>
                      <div className="flex flex-col gap-1">
                        <Typography variant="h6" color="blue-gray">
                          {e.title}
                        </Typography>
                        <p className="text-xs text-gray-500">{e.date}</p>
                        <p className="text-xs text-gray-500">{e.note}</p>
                      </div>
                    </TimelineHeader>
                  </TimelineItem>
                ))
              }
            </Timeline>
          </div>
        }
        {/* end of time line */}

        {
        shipping.length >= 1 &&
        <div className="items-start flex">
          <div className="relative border border-blue-gray-50 bg-white mb-5 shadow-blue-gray-900/5">
            <div className=" p-2 bg-blue-800 text-white">
              <p className="text-lg">Senders Address</p>
            </div>

            <div className="p-2">
              <p className="text-xs md:text-md capitalize text-gray-400 font-light">Name : {shipping[0]?.senderName}</p>
              <p className="text-xs md:text-md capitalize text-gray-400 font-light">Address :{shipping[0]?.senderAddress}</p>
              <p className="text-xs md:text-md capitalize text-gray-400 font-light">Phone : {shipping[0]?.senderPhone}</p>
            </div>
          </div>

          <div className="relative border border-blue-gray-50 bg-white mb-5 shadow-blue-gray-900/5">
            <div className=" p-2 bg-blue-800 text-white">
              <p className="text-lg">Receiver Address</p>
            </div>

            <div className="p-2">
              <p className="text-xs md:text-md capitalize text-gray-400 font-light">Name : {shipping[0]?.receiverName}</p>
              <p className="text-xs md:text-md capitalize text-gray-400 font-light">Address :{shipping[0]?.receiverAddress}</p>
              <p className="text-xs md:text-md capitalize text-gray-400 font-light">Phone : {shipping[0]?.receiverPhone}</p>
            </div>
          </div>

        </div>
      }



      </div>
      {
        !loading && entry.length <= 0 && shipping.length <= 0 && (<div className="flex flex-col justify-center items-center">
          <p className="text-red-500 text-2xl font-light">No shipping available</p>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/man-check-order-list-10243362-8287405.png?f=webp" alt="" />
        </div>)
      }


    </div>
  );
}

export default Tracking;
