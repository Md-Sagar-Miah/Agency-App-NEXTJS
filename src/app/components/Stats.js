async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/StatList");
    if (!res.ok) {
        throw new Error("StatList Calling Fail");
    }
    return res.json();
}


const Stats = async () => {
    const data = await getData();
    return (
        <section className="pt-20 pb-8">
            <div className="container mx-8 xl:mx-auto max-w-6xl">
                <div className="flex flex-nowrap space-x-7">
                    <div className="mb-8 px-8 py-12 rounded-2xl w-full md:w-1/2 lg:w-1/4 text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <span className="mb-6 inline-block p-6 rounded-lg bg-green-100">
                            <img src="Group.png" alt="img" />
                        </span>
                        <h3 className="text-3xl font-bold">{data['followers']}</h3>
                        <p className=" font-semibold text-base">Followers</p>
                    </div>
                    <div className="mb-8 px-8 py-12 rounded-2xl w-full md:w-1/2 lg:w-1/4 text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <span className="mb-6 inline-block p-6 rounded-lg bg-green-100">
                            <img src="Like.png" alt="img" />
                        </span>
                        <h3 className="text-3xl font-bold">{data['solved']}</h3>
                        <p className="font-semibold text-base">Solved Problems</p>
                    </div>
                    <div className="mb-8 px-8 py-12 rounded-2xl w-full md:w-1/2 lg:w-1/4 text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <span className="mb-6 inline-block p-6 rounded-lg bg-green-100">
                            <img src="Happy.png" alt="img" />
                        </span>
                        <h3 className="text-3xl font-bold">{data['customers']}</h3>
                        <p className="font-semibold text-base">Happy Customers</p>
                    </div>
                    <div className="mb-8 px-8 py-12 rounded-2xl w-full md:w-1/2 lg:w-1/4 text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <span className="mb-6 inline-block p-6 rounded-lg bg-green-100">
                            <img src="Scan.png" alt="img" />
                        </span>
                        <h3 className="text-3xl font-bold">{data['projects']}</h3>
                        <p className="font-semibold text-base">Projects</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Stats;