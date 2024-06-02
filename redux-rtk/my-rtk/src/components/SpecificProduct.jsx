import { useGetProductByIdQuery } from "../app/service/dummyData"


function SpecificProduct() {
    const { data, isError, isLoading } = useGetProductByIdQuery(2);
    console.log(data);
    return (
        <>
            <h1>{data?.brand}</h1>
            <h1>{data?.category}</h1>
            <h1>{data?.description}</h1>
        </>
    )
}

export default SpecificProduct