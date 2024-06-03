import React, { useEffect, useState } from 'react'

const useGetUsersList = () => {
    const [loading, setLoading] = useState(false)
    const [List, setList] = useState([])
    const GetList = async () => {
        setLoading(true)
        try {
            const res = await fetch("/api/users")
            const body = await res.json();

            if (body.hasOwnProperty('error')) {

                console.log(body.error);
                return
            }
            setList(body)
        } catch (error) {

            console.log(error.message);
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {

        GetList()
    }, []);
    return [loading, List]
}

export default useGetUsersList
