import Link from "next/link"
const Navbar = () => {
    return (
        <>
            <ul className="login-menu border bg-green-200">
                <li>
                    <Link href="/login">Login Main</Link>
                </li>

                <li>
                    <Link href="/login/loginuser">Login Regular</Link>
                </li>

                <li>
                    <Link href="/login/loginadmin">Login Admin</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar