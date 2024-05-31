import { useState } from "react";
import { useAuthContext } from "../context/authContext";
const useCreateAccount = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext()

    const createAccount = async (formdata) => {

        const { fullName, Username, Email, Password, ConformPassword, Gender } = formdata; // Destructure properties from formdata

        const error = await handleInputErrros({ fullName, Username, Email, Password, ConformPassword, Gender }); // Pass destructured properties to handleInputErrors
        if (error) {
            console.log(error);
            return { error }
        };

        setLoading(true)
        try {

            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName: fullName, username: Username, email: Email, password: Password, conformPassword: ConformPassword, gender: Gender })
            })
            const data = await res.json()
            if (data.error) {
                return data
            } else {
                localStorage.setItem("authUser", JSON.stringify(data))
                //context
                setAuthUser(data)

            }

            //localStorage

        } catch (error) {
            // return { error }
            console.log(error)
        } finally {
            setLoading(false)
        }
    }



    return { loading, signup: createAccount }
}
function handleInputErrros({ fullName, Username, Email, Password, ConformPassword, Gender }) {
    if (!fullName || !Username || !Email || !Password || !ConformPassword || !Gender) {

        return ['Please fill all the required fields']
    } else if (Password !== ConformPassword) {

        return ["Password don't match "]

    }
    return

}
export default useCreateAccount