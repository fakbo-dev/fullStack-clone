import { InfoShape } from "./Info"

type AdminInfoShape = InfoShape & {
    admin: string;
}
const AdminInfo = ({ name, lastName, age, hobbies, location, admin }: AdminInfoShape) => {
    return (
        <div>
            <ul>
                <li>Name: {name}</li>
                <li>lastName: {lastName}</li>
                <li>age: {age}</li>
                <li>hobbies: {hobbies}</li>
                <li>location: {location.map((loca, i) => i !== location.length - 1 ? loca + ", " : loca + "")}</li>
                <li>admin: {admin}</li>
            </ul>
        </div>
    )
}

export default AdminInfo