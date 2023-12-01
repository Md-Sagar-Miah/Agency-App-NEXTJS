import Link from "next/link";

async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/TeamList");
    if (!res.ok) {
        throw new Error("TeamList Calling Fail");
    }
    return res.json();
}

const Team = async () => {
    const data = await getData()
    return (
        <section>
            <div className="container mx-auto py-16">
                <h3 className=" font-medium text-xl text-green-600 pb-6">
                    OUR TEAM MEMBER
                </h3>
                <h1 className="font-bold text-3xl pb-14">
                    Check our awesome team <br /> members
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-8 pb-8 px-8 md:px-0">
                    {
                        data.map((item, i) => {
                            return (
                                i < 3 ?
                                    <div key={i.toString()} className=" shadow-sm box-border w-full border rounded-3xl overflow-hidden relative">
                                        <img className=" w-full md:h-3/4" src={data[i]['image']} alt="img" />
                                        <div className="flex flex-nowrap bg-white rounded-3xl w-36 px-3 py-4 absolute bottom-44 left-28">
                                            <Link className=" border-r border-r-gray-200 px-3" href={"https:/" + data[i]['facebook']}> <img src="fb_profile.png" alt="" /> </Link>
                                            <Link className="border-r border-r-gray-200 px-3" href={"https:/" + data[i]['twitter']}><img src="twt_profile.png" alt="" /></Link>
                                            <Link className=" px-3" href={"https:/" + data[i]['instagram']}><img src="instra_profile.png" alt="" /></Link>
                                        </div>
                                        <h4 className=" text-xl md:text-3xl font-bold  flex  justify-center mt-2 md:mt-14">{data[i]['name']}</h4>
                                    </div>
                                    :
                                    <></>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export default Team
