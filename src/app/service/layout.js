export async function generateMetadata() {
    const res = await fetch(process.env.BASE_URL + "api/SiteMeta/services");
    const JSON = await res.json();
    return {
        title: JSON[0]['title'],
        description: JSON[0]['description'],
        keywords: JSON[0]['keywords'],
        openGraph: {
            images: JSON[0]['image'],
        },
    }
}

function layout({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}

export default layout;
