
export type InfoShape = {
    name: string;
    lastName: string;
    age: number;
    hobbies: string;
    location: string[];
}

const Info = ({ name, lastName, age, hobbies, location }: InfoShape) => {
    return (
        <div>
            <ul>
                <li>Name: {name}</li>
                <li>lastName: {lastName}</li>
                <li>age: {age}</li>
                <li>hobbies: {hobbies}</li>
                <li>location: {location.map((a, i) => i !== location.length - 1 ? a + "," : a + "")}</li>
            </ul>
        </div>
    )
}

export default Info