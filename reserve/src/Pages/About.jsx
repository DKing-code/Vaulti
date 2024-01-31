import React from 'react'
import vault from '../assets/images/vault.jpeg'

function About() {
    return (
        <div>
            <div className='h-[350px] bg-gray-400'>
                <img src={vault} alt="Vault" className='h-[100%] w-[100%] object-cover' />
            </div>
            <div className='container mx-auto py-10 p-5 md:p-auto'>
                <p className='text-center text-3xl'>About Us</p>
                <p className='font-light'>Coastal Security Company is a fully Licensed, Bonded and Insured Private Security Company, registered in the Nertherlands and a leader in high quality and effective. Coastal Security Company provides fully trained and screened officers and personnel to maintain secure environments for companies, residences, warehouses amongst others.</p> <br />
                <p className='font-light'>Our physical security services are designed to fully integrate with your requirements, likewise to provide the maximum protection for your workers and assets. Our officers are selected for their professional demeanor, attitude and ability. All officers undergo comprehensive background screening, criminal record and fingerprint checks. Our extensive training involves theoretical and practical courses including security planning, security and law, public relations, first aid, fire prevention and public decorum.</p> <br />
                <p className='font-light'>Coastal Security Company officers are prepared to politely handle and diffuse delicate situations, while taking a proactive stance enforcing client policy. Commitment to effective security and exceptional customer service is our hallmark.</p>

                <div className="grid md:grid-cols-3 gap-5 md:my-10 my-5 bg-gray-100 p-10">
                    <div>
                        <p className='text-center text-2xl text-blue-500'>Our Mission</p>
                        <p className='font-light text-center'>To promote and create value for our clients through consistently delivering high quality Gold investment services to our customers and maximizing their satisfaction.</p>
                    </div>
                    <div>
                        <p className='text-center text-2xl text-blue-500'>Our Vision</p>
                        <p className='font-light text-center'>To be recognised as the premier gold mining company known for delivering an outstanding services in our business operation.</p>
                    </div>
                    <div>
                        <p className='text-center text-2xl text-blue-500'>Our Goals</p>
                        <p className='font-light text-center'>Our goal is to create sustainable value for our employees and social partners through safe and responsible mining practices and capital discipline as a global mining company.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About