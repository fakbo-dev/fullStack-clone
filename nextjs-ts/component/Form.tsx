"use client"
import { FormEvent, useRef, useState } from "react"

type FormShape = {
    name: string;
    email: string;
    password: string;
}
const Form = () => {

    const [formData, setFormData] = useState<FormShape>({
        name: "",
        email: "",
        password: "",
    })

    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const nameVal = name.current!.value;
        const emailVal = email.current!.value;
        const passwordVal = password.current!.value;

        setFormData({
            name: nameVal,
            email: emailVal,
            password: passwordVal,
        })

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="your Name" ref={name} />
            <input type="email" placeholder="Your Email" ref={email} />
            <input type="password" placeholder="Your password" ref={password} />
            <button type="submit">Submit</button>


            <section>
                <h1>{formData.name}</h1>
                <h1>{formData.email}</h1>
                <h1>{formData.password}</h1>
            </section>
        </form>

    )
}

export default Form