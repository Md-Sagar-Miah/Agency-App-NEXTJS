"use client"

import { useState } from "react"



const Subscibe = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
    return (
        <div>
            <div className="container mx-auto py-20 flex justify-center ">
                <div className=" grid justify-items-center">
                    <h3 className="font-medium text-xl text-green-600 pb-6">
                        SUBSCRIBE
                    </h3>
                    <h1 className="font-bold text-3xl pb-2">
                        Subscribe To Get The Latest
                    </h1>
                    <h1 className="font-bold text-3xl">
                        News About Us
                    </h1>
                    <p className="pt-2 px-8 text-gray-500">
                        Please Drop Your Email Below To Get Daily Update About What We Do
                    </p>
                    <div className="my-8 relative w-full border border-black rounded-xl ">
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} className=" w-full block px-8 py-5 rounded-2xl" type="email" name="email" id="email" placeholder="Enter Your Email Address" />
                        <button onClick={handleSubmit} className=" absolute bottom-1 right-1 rounded-2xl bg-orange-600 px-6 py-4  text-white hover:text-orange-600 hover:ring-2 hover:ring-orange-600 hover:bg-white">Subsceibe</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscibe
