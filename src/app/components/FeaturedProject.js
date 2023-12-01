import Link from "next/link";

async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/FeaturedProject");
    if (!res.ok) {
        throw new Error("FeaturedProject Calling Fail");
    }
    return res.json();
}


const FeaturedProject = async () => {

    const data = await getData();

    return (
        <section className=" bg-green-100">
            <div className="container mx-auto py-16">
                <h3 className=" font-medium text-xl text-green-600 pb-5">
                    FEATURED PROJECT
                </h3>
                <h1 className=" font-bold text-3xl pb-10">
                    We provide the Perfect Solution <br /> to your business growth
                </h1>
                <div className="flex flex-wrap md:flex-nowrap md:space-x-8 mt-4">
                    <div className=" w-full md:w-1/2">
                        <img className=" rounded-2xl h-3/4" src={data[0]['image']} alt="img" />
                        <h4 className="mb-4 pt-4 text-gray-500">App Design-{data[0]['created_at']}</h4>
                        <h1 className=" font-bold text-gray-700 text-xl md:text-3xl">{data[0]['title']}</h1>
                    </div>
                    <div className=" w-full md:w-1/2 flex flex-wrap justify-between">
                        {
                            data.map((item, i) => {
                                return (
                                    i >= 1 && i < 5 ?
                                        <div key={i.toString()} className=" w-full md:w-1/2 md:px-6 pb-6 mb-6 mb:mb-0">
                                            <img className=" rounded-2xl" src={data[i]['image']} alt="img" />
                                            <h4 className="mb-4 pt-4 text-sm text-gray-500">App Design-{data[i]['created_at']}</h4>
                                            <h1 className="font-bold text-gray-700 text-xl">{data[i]['title']}</h1>
                                        </div>
                                        :
                                        <></>
                                )
                            })
                        }

                    </div>

                </div>
            </div>

        </section>
    );
};

export default FeaturedProject;

