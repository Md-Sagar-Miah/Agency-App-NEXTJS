"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navbar = () => {
    const current = usePathname();

    return (
        <section className=' py-8'>
            <div className='container mx-8 xl:mx-auto max-w-6xl flex  justify-between'>
                <div className=' font-extrabold text-lg py-2'>
                    Design<span className=' text-orange-500 '>AGENCY</span>
                </div>
                <div className='flex flex-nowrap gap-4 pt-1'>
                    <Link className={current === "/" ? " text-green-600 text-sm font-semibold   px-5 py-2 " : "hover:text-green-600 text-sm font-semibold   px-5 py-2 "} href="/">Home</Link>
                    <Link className={current === "/team" ? " text-green-600 text-sm font-semibold   px-5 py-2 " : "hover:text-green-600 text-sm font-semibold   px-5 py-2 "} href="/team">Team</Link>
                    <Link className={current === "/service" ? " text-green-600 text-sm font-semibold   px-5 py-2 " : "hover:text-green-600 text-sm font-semibold   px-5 py-2 "} href="/service">Service</Link>
                    <Link className={current === "/projects" ? " text-green-600 text-sm font-semibold   px-5 py-2 " : "hover:text-green-600 text-sm font-semibold   px-5 py-2 "} href="/projects">Projects</Link>
                    <Link className={current === "/testimonials" ? " text-green-600 text-sm font-semibold   px-5 py-2 " : "hover:text-green-600 text-sm font-semibold   px-5 py-2 "} href="/testimonials">Testimonials</Link>
                    <Link className=' text-sm font-semibold border border-solid border-green-600 rounded-lg px-5 py-2 hover:bg-white hover:ring-2 hover:ring-green-600 hover:text-green-600 ' href="/">Login</Link>
                    <Link className=' text-sm text-white font-semibold border border-solid bg-green-600 rounded-lg px-5 py-2 hover:bg-white hover:ring-2 hover:ring-green-600 hover:text-green-600 ' href="/">Register</Link>
                </div>
            </div>
        </section>
    )
}

export default navbar
