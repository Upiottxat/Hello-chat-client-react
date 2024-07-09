import React, { useEffect, useState } from 'react'


const useGetUsersList = () => {
    const [loading, setLoading] = useState(false)
    const [List, setList] = useState([])
    const [searchList, setSearchList] = useState([])
    const [searchLoading, setSearchLoading] = useState(false);
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
            return body
        } catch (error) {

            console.log(error.message);
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {

        GetList()
    }, []);




    const searchByUsername = async (username) => {
        if (!username) return
        setSearchLoading(true);
        try {
            const res = await fetch("/api/users/searchByUsername", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username })
            })
            const body = await res.json()
            console.log(body);
            setSearchList(body)
            // setList(body)
        } catch (error) {
            console.log("Error", error);
        } finally {
            setSearchLoading(false)
        }
    }









    return [loading, List, searchList, searchByUsername]
}

export default useGetUsersList
