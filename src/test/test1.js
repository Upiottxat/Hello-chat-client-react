import React, { useEffect } from 'react'

const Test = () => {
    const test = async () => {
        try {
            const res = await fetch("/testJson")
            const body = await res.json();
            console.log(body);
        } catch (error) {
            console.log(error);
            console.log(error.message);
            console.log("cannot fetch ");
        }
    }
    test()
    useEffect(() => {
        test();
    }, [])
    return (
        <div>

        </div>
    )
}

export default Test
