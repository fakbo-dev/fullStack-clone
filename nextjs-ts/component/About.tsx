import { ReactElement, type ReactNode } from "react"

type ChildrenCompontent = { children: ReactNode }
const About = ({ children }: ChildrenCompontent) => {
    return (
        <section>
            {children}
        </section>
    )
}

export default About