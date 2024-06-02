import { useGetAllProductsQuery } from "../app/service/dummyData";


function Allproducts() {
    const { data, isError, isLoading } = useGetAllProductsQuery();

    if (isError) {
        return <h1>Oh no! we got an error</h1>
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            {data?.products.map(p => (
                <h1 key={p.id}>{p.title}</h1>
            ))}
        </>
    )
}

export default Allproducts