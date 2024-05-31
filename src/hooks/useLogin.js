import React, { useState } from 'react'
import { useAuthContext } from '../context/authContext'
const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()
    const login = async (username, password) => {
        setLoading(true)

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username, password: password })
            })
            const body = await res.json()
            if (body.error) return body

            //localStorage
            localStorage.setItem('authUser', JSON.stringify(body))
            //context
            setAuthUser(body)
        } catch (error) {
            console.log("Error ", error);

        } finally {
            setLoading(false)
        }
    }
    return [loading, login]
}

export default useLogin
