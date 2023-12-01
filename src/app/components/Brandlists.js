async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/BrandList");
    if (!res.ok) {
        throw new Error("BrandList Calling Fail");
    }
    return res.json();
}

const Brandlists = async () => {
    const data = await getData();
    return (


        <div className="flex flex-wrap -mx-2">
            {
                data.map((item, i) => {
                    return (
                        <div key={i} className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2">
                            <div>
                                <img className="mx-auto h-8" src={item['image']} alt="" />
                            </div>
                        </div>
                    )
                })
            }
        </div>


    )
}

export default Brandlists
