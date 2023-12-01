async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/AllProject");
    if (!res.ok) {
        throw new Error("AllProject Calling Fail");
    }
    return res.json();
}

const AllProject = async () => {

    const data = await getData();

    return (
        <section>
            <div className="container mx-8 xl:mx-auto max-w-6xl py-16">
                <div className="">
                    <h3 className=" font-medium text-xl text-green-600 pb-6">
                        ALL PROJECT
                    </h3>
                    <h1 className="font-bold text-3xl pb-14">
                        Better Agency/SEO Solution At <br /> Your Fingertips
                    </h1>
                </div>

                <div className=" grid md:grid-cols-2 gap-7">
                    {
                        data.map((item, i) => {
                            return (

                                i < 6 ? <div key={i} className="w-full md:w-full rounded-3xl px-7 py-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">

                                    <img className=" h-96 w-full mx-auto object-cover rounded-3xl "
                                        src={item['image']}
                                        alt="" />
                                    <h1 className=" text-3xl font-bold pt-9">{item['title']}</h1>
                                </div> : <></>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};
export default AllProject;