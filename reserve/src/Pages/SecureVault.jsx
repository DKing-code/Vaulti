import React, { useState } from 'react'
import vault from '../assets/images/vault.jpeg'
import { Card, Typography } from "@material-tailwind/react";
import { useLocation } from 'react-router-dom';



function SecureVault() {
    const location = useLocation();
    const userData = location.state && location.state.userData;


    const TABLE_HEAD = ["Name", "Value"];

    const tableDoc = (value) => {
        return (
            <td className={'p-5'}>
                <Typography
                    variant="small"
                    color="white"
                    className="font-normal md:text-xl"
                >
                    {value}
                </Typography>
            </td>
        )
    }




    return (
        <div>
            <div className='h-[350px] bg-gray-400'>
                <img src={vault} alt="Vault" className='h-[100%] w-[100%] object-cover' />
            </div>

            <div className='container mx-auto py-10 p-5 md:p-auto'>
                <h3 className='text-3xl font-light bg-blue-400 text-white p-4'>Welcome Back {userData[0]?.user.firstname +' ' + userData[0].user.lastname}</h3>
                <div className='p-4 bg-gray-100 my-5 rounded-md'>
                    <p className='text-xl bg-white w-fit p-3 text-gray-700'>Depositor information for vault number: {userData[0].vaultId}</p>

                    <Card className="h-full w-full my-5 overflow-auto">
                        <table  className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th
                                            key={head}
                                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="leading-none opacity-70 font-semibold text-xl"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className='bg-blue-400 text-base'>

                                <tr  className='p-5'>
                                    <td className='border-b border-e-2 border-blue-gray-50'>
                                        {tableDoc('OUR REF')}
                                    </td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.ourref)}</td>
                                    
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-e-2 border-blue-gray-50 '>{tableDoc('SECURITY CODE')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.securitycode)}</td>
                                    
                                    
                                </tr>
                                <tr  className='p-5'>
                                    <td className='border-b border-e-2 border-blue-gray-50'>{tableDoc('FULL NAME')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.user.firstname +' ' + userData[0].user.lastname )}</td>
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-e-2 border-blue-gray-50'>{tableDoc('DATE OF BIRTH')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.user.dob)}</td>

                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-e-2 border-blue-gray-50'>{tableDoc('COUNTRY')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.country)}</td>
                                    
                                    
                                </tr>
                                <tr key={name} className='p-5'>
                                    <td className='border-b border-e-2 border-blue-gray-50'>{tableDoc('NATIONALITY')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.nationality)}</td>
                                    
                                    
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-e-2 border-blue-gray-50'>{tableDoc('SEX')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.user.sex)}</td>
                                    
                                    
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-e-2 border-blue-gray-50'>{tableDoc('OCCUPATION')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.occupation)}</td>
                                    
                                    
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-e-2 border-blue-gray-50'>{tableDoc('DEPOSIT DATE')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.date)}</td>
                                    
                                    
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-e-2 border-blue-gray-50'>{tableDoc('PURPOSE OF DEPOSIT')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.purpose_of_deposit)}</td>
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-e-2 border-blue-gray-50'>{tableDoc('ADDRESS')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.address)}</td> 
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-e-2 border-blue-gray-50'>{tableDoc('ITEM NAME')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.itemname)}</td>
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-e-2 border-blue-gray-50'>{tableDoc('WEIGHT')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.weight)}</td>
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-e-2 border-blue-gray-50'>{tableDoc('PURITY')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.purity)}</td>
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-e-2 border-blue-gray-50'>{tableDoc('KARAT / CARAT ')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.carat)}</td>
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-e-2 border-blue-gray-50'>{tableDoc('DEMURAGE CHARGE ')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.charge)}</td>
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-e-2  border-blue-gray-50'>{tableDoc('NEXT OF KING')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc(userData[0]?.next_of_king)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default SecureVault