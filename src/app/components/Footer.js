import Link from "next/link"

async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/SocialLink");
    if (!res.ok) {
        throw new Error("SocialLink List Calling Fail");
    }
    return res.json();
}

const Footer = async () => {
    const data = await getData();
    return (
        <section className=" bg-black text-white py-6">
            <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap container mx-8 xl:mx-auto max-w-6xl py-14 md:space-x-20">
                <div className=" w-full md:w-1/3 flex flex-col items-center  md:items-start">
                    <h1 className=" font-bold text-4xl px-4 pb-8">
                        WEB LOGO
                    </h1>
                    <p className=" text-base">
                        Some footer text about the <br />  Agency. Just a little description to <br /> help people understand you better
                    </p>
                    <div className=" flex flex-wrap md:flex-nowrap md:space-x-4 pt-6 pb-8">

                        <Link href={"https:/" + data[0]['link']}><img src="fb.png" alt="img" /></Link>
                        <Link href={"https:/" + data[1]['link']}><img src="twt.png" alt="img" /></Link>
                        <Link href={"https://www.linkedin.com/"}><img src="linkedin.png" alt="img" /></Link>
                        <Link href={"https:/" + data[2]['link']}><img src="instra.png" alt="img" /></Link>
                    </div>


                </div>
                <div className=" w-full md:w-1/3 flex flex-col items-center me-12 md:me-0 my-10 md:my-0">
                    <h6 className=" text-xl font-medium">Quick Links</h6>
                    <ul>
                        <li className="pt-5"><Link href="/service">Services</Link></li>
                        <li className="pt-5"><Link href="/testimonials">Portfolio</Link></li>
                        <li className="pt-5"><Link href="">About Us </Link></li>
                        <li className="pt-5"><Link href="">Contact Us</Link></li>
                    </ul>

                </div>
                <div className=" w-full md:w-1/3 flex flex-col ms-8 md:ms-0 items-center md:items-end">
                    <h6 className=" mr-16 md:mr-36 md:pb-8  text-lg font-semibold">Address</h6>
                    <p className=" leading-relaxed">
                        Design Agency Head Office. <br />
                        Airport Road <br />
                        United Arab Emirate
                    </p>
                </div>

            </div>
            <div className="container mx-8 xl:mx-auto max-w-6xl">
                <span className=" text-lg mx-2">Copyright Design Agency 2022</span>
            </div>
        </section>
    )
}

export default Footer
