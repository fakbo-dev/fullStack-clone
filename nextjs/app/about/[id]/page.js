import { redirect } from "next/dist/server/api-utils"

const Id = ({ params }) => {

    if (params.id == 4) {
        redirect("login");
    }
    return (
        <div>Id {params.id}</div>
    )
}

export default Id