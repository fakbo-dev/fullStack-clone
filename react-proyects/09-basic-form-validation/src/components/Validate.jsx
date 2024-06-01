import { useState } from "react";

function Validate() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorUserName, setErrorUserName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorpassword, setErrorPassword] = useState("");
    const [errorconfirmPassword, setErrorConfirmPassword] = useState("");

    const [userColor, setUserColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [passwordColor, setPasswordColor] = useState("");
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

    const handleValidate = (e) => {
        e.preventDefault();

        if (userName.length > 8) {
            setErrorUserName("");
            setUserColor("green");
        } else {
            setErrorUserName("Username must be 8 letters long");
            setUserColor("red");
        }

        if (email.includes("@gmail")) {
            setErrorEmail("");
            setEmailColor("green");
        } else {
            setEmailColor("red");
            setErrorEmail("Email must have @gmail");
        }

        if (password.length > 8) {
            setErrorPassword("");
            setPasswordColor("green");
        } else {
            setPasswordColor("red");
            setErrorPassword("Password should be 8 letters long");
        }

        if (confirmPassword !== "" && password === confirmPassword) {
            setConfirmPasswordColor("green");
            setErrorConfirmPassword("");
        } else {
            setErrorConfirmPassword("Passord didn't matched.")
            setConfirmPasswordColor("red");
        }
    };


    return (
        <>
            <div className="card">
                <div className="card-image"></div>

                <form>
                    <input type="text" placeholder="Name" style={{ borderColor: userColor }}
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)} />
                    <p className="error">{errorUserName}</p>

                    <input type="email" placeholder="email" style={{ borderColor: emailColor }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <p className="error">{errorEmail}</p>

                    <input type="password" placeholder="password" style={{ borderColor: passwordColor }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <p className="error">{errorpassword}</p>

                    <input type="password" placeholder="confir Password" style={{ borderColor: confirmPasswordColor }}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    <p className="error">{errorconfirmPassword}</p>

                    <button className="submit" onClick={handleValidate}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Validate