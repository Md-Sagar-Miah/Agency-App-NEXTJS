import React from 'react'
import Navbar from '../components/Navbar'
import Subscibe from '../components/Subscibe'
import Footer from '../components/Footer'
import Services from '../components/Services'

const page = () => {
    return (
        <section>
            <div className=' bg-gray-100'>
                <Navbar />
                <div className='container mx-auto max-w-6xl pt-20 pb-16'>
                    <h1 className=' font-semibold text-4xl pb-5'>Our Services</h1>
                    <h6 className=' font-semibold pb-3'>Home  <span className=' font-medium text-xl pty-4 px-2'>&gt;</span>  <span className=' text-green-600'>Our Services</span></h6>
                </div>
            </div>
            <Services />
            <Subscibe />
            <Footer />
        </section>
    )
}

export default page
