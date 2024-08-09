
type HomelanderDoneKillMyWifeAndTookMyBloodySon = {
    name: string;
    age: number;
    isStudent: boolean;
}

const User = ({ name, age, isStudent }: HomelanderDoneKillMyWifeAndTookMyBloodySon) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Is Student: {isStudent ? 'Yes' : 'No'}</p>
        </div>
    )
}

export default User