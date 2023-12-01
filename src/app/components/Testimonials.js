async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/TestimonialList");
    if (!res.ok) {
        throw new Error("Testimonial List Calling Fail");
    }
    return res.json();
}

const Testimonial = async () => {
    const data = await getData();
    return (

        <section>
            <div className="container mx-8 xl:mx-auto max-w-6xl pt-16 mb-20">
                <div className="">
                    <h3 className=" font-medium text-xl text-green-600 pb-6">
                        TESTIMONIAL LIST
                    </h3>
                    <h1 className="font-bold text-3xl pb-14">
                        Better Agency/SEO Solution At <br /> Your Fingertips
                    </h1>
                </div>

                <div className="grid md:grid-cols-3 md:gap-x-8 gap-y-10">

                    {
                        data.map((item, i) => {
                            return (
                                <div key={i} className=" w-full">
                                    <div className="p-8 bg-white rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-center">

                                        <img className="mb-2 mx-auto rounded-2xl h-24 w-24 object-cover"
                                            src={item['image']}
                                            alt="" />
                                        <p className="mb-8 text-gray-500 leading-loose">
                                            {item['msg']}
                                        </p>

                                        <h4 className="mb-2 text-2xl font-bold font-heading">
                                            {item['name']}
                                        </h4>
                                        <p className="mb-2">{item['designation']}</p>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    );
};
export default Testimonial;