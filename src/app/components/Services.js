async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/AllService");
    if (!res.ok) {
        throw new Error("AllService List Calling Fail");
    }
    return res.json();
}

const Services = async () => {
    const data = await getData();
    return (
        <div>
            <div className="container mx-auto max-w-6xl py-20">
                <div className="">
                    <h3 className=" font-medium text-xl text-green-600 pb-6">
                        OUR ALL SERVICES
                    </h3>
                    <h1 className="font-bold text-3xl pb-14">
                        We Provide BestWeb design <br /> services
                    </h1>
                </div>
                <section className="grid md:grid-cols-2 gap-x-8 gap-y-14">

                    {
                        data.map((item, i) => {
                            return (
                                <div key={i.toString()} className=" w-full p-8 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                                    <div className="">
                                        <div className="max-w-md">
                                            <h2 className="mb-6 text-3xl font-semibold font-heading xl:whitespace-nowrap">
                                                {item['title']}
                                            </h2>
                                            <div className="mb-6 max-w-sm">
                                                <p className="text-gray-400 tracking-wider">
                                                    {item['des']}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="mb-4 flex flex-wrap items-end">
                                            <div className="mb-4 md:mb-0 w-full md:w-2/3 px-3">
                                                <img className="w-full md:h-48 object-cover rounded" src={item['image1']} />
                                            </div>
                                            <div className="mb-4 md:mb-0 w-full md:w-1/3 px-3">
                                                <img className="w-full md:h-48 object-cover rounded" src={item['image2']} alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap items-start">
                                            <div className="mb-4 md:mb-0 w-full md:w-1/3 px-3">
                                                <img className="w-full md:h-48 object-cover rounded" src={item['image3']} alt="" />
                                            </div>
                                            <div className="w-full md:w-2/3 px-3">
                                                <img className="w-full md:h-48 object-cover rounded" src={item['image4']} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
            </div>

        </div>
    );
};

export default Services;

