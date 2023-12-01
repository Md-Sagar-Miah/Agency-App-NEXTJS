async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/WorkList");
    if (!res.ok) {
        throw new Error("WorkList List Calling Fail");
    }
    return res.json();
}

const Worklist = async () => {
    const data = await getData();
    return (
        <div>
            <div className="container mx-auto py-16 ">
                <h3 className=" font-medium text-xl text-green-600 pb-5">
                    WORK LIST
                </h3>
                <h1 className=" font-bold text-3xl pb-10">
                    We provide the Perfect Solution <br /> to your business growth
                </h1>
                <div className=" group/item grid grid-cols-1 md:grid-cols-3 gap-10">
                    {
                        data.map((item, i) => {
                            return (
                                <div key={i} className=" group/edit w-full border border-white rounded-3xl px-7 py-12 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                    <span className="">
                                        <img src={`${item['step']}.png`} alt="image" />
                                    </span>
                                    <h3 className="py-6 font-bold text-2xl">{item['title']}</h3>
                                    <p className=" pb-4">
                                        {item['des']}
                                    </p>
                                    <span className="flex w-40 px-5 py-3 rounded-xl group-hover/edit:bg-orange-600 group-hover/edit:text-white">
                                        <button className=" mr-2">Learn More </button>
                                        <span className=" font-bold text-xl">&#8594;</span>
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Worklist
