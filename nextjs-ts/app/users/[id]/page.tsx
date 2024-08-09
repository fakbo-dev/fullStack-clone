type UserShape = {
    params: { id: number };
}

const Id = ({ params: { id } }: UserShape) => {
    return (
        <div>{id}</div>
    )
}

export default Id