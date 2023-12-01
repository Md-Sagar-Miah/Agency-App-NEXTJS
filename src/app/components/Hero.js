import React from 'react';
import Navbar from './Navbar'
import Brandlists from './Brandlists';
const getData = async () => {
    const res = await fetch(process.env.BASE_URL + "api/HeroList");
    if (!res.ok) {
        throw new Error("Hero api calling is fail")
    }
    return res.json();
}

const Hero = async () => {
    const data = await getData();
    return (

        <section className=' bg-green-100 pb-2'>
            <Navbar />
            <div className='container mx-auto max-w-6xl flex flex-col lg:flex-row justify-between items-center'>
                <div className=' space-y-4 flex-col w-full lg:w-1/2 '>
                    <h1 className=' text-5xl font-extrabold leading-tight'>
                        {data.title}
                    </h1>
                    <p className=' text-lg font-medium pb-8'>
                        {data.description}
                    </p>
                    <button className=' bg-green-600 rounded-2xl text-lg font-semibold text-white px-9 py-5 hover:bg-white hover:ring-2 hover:ring-green-600 hover:text-green-600 '>
                        Get Started
                    </button>
                </div>
                <div className='w-full lg:w-1/2 px-6 mt-4'>
                    <div className='flex flex-wrap lg:mb-4 '>
                        <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-2xl' src={data['image2']} alt='' />
                        <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-2xl ' src={data['image1']} alt='' />

                    </div>
                    <div className='flex flex-wrap lg:mb-4 '>
                        <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-2xl ' src={data['image4']} alt='' />
                        <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-2xl ' src={data['image3']} alt='' />

                    </div>
                </div>
            </div>
            <div className=' bg-white py-10 my-8'>
                <div className='container mx-auto max-w-6xl '>
                    <Brandlists />
                </div>
            </div>

        </section>
    )
}

export default Hero
