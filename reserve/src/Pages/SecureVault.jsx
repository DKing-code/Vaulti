import React from 'react'
import vault from '../assets/images/vault.jpeg'
import { Card, Typography } from "@material-tailwind/react";

function SecureVault() {
    let date = new Date()
    const TABLE_HEAD = ["Name", "Value"];

    const tableDoc = (value) => {
        return (
            <td className={'p-5'}>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
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
                <h3 className='text-3xl font-light bg-blue-400 text-white p-4'>Welcome back dekin faisal</h3>
                <div className='p-4 bg-gray-100 my-5 rounded-md'>
                    <p className='font-bold text-xl bg-white w-fit p-3 shadow-md rounded-md'>Vault ID : 23588965</p>

                    <Card className="h-full w-full my-5 overflow-auto">
                        <table className="w-full min-w-max table-auto text-left">
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
                                                className="font-normal leading-none opacity-70"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>

                                <tr key={name} className='p-5'>
                                    <td className='border-b border-blue-gray-50'>
                                        {tableDoc('OUR REF')}
                                    </td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('faisal')}</td>
                                    
                                </tr>
                                <tr key={name} className='p-5'>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('SECURITY CODE')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('faisal')}</td>
                                    
                                    
                                </tr>
                                <tr  className='p-5'>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('FULL NAME')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('faisal')}</td>
                                </tr>
                                <tr className='p-5'>
                                    <td>{tableDoc('DATE OF BIRTH')}</td>
                                    <td>{tableDoc('faisal')}</td>

                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('COUNTRY')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('faisal')}</td>
                                    
                                    
                                </tr>
                                <tr key={name} className='p-5'>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('NATIONALITY')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('faisal')}</td>
                                    
                                    
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('SEX')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('faisal')}</td>
                                    
                                    
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('OCCUPATION')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('faisal')}</td>
                                    
                                    
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('DEPOSIT DATE')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('faisal')}</td>
                                    
                                    
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('PURPOSE OF DEPOSIT')}</td>
                                    <td className='border-b border-blue-gray-50'> {tableDoc('faisal')}</td>
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('ADDRESS')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('faisal')}</td> 
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('ITEM NAME')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('faisal')}</td>
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('WEIGHT')}</td>
                                    <td className='border-b border-blue-gray-50'> {tableDoc('faisal')}</td>
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('PURITY')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('faisal')}</td>
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('KARAT / CARAT ')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('faisal')}</td>
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('DEMURAGE CHARGE ')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('faisal')}</td>
                                </tr>
                                <tr className='p-5'>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('NEXT OFKING')}</td>
                                    <td className='border-b border-blue-gray-50'>{tableDoc('faisal')}</td>
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