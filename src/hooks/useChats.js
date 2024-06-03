import React, { useEffect, useState } from 'react'
import toast, { } from "react-hot-toast"
const useChats = (id) => {

    const [msg, setmsg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sendLoading, setSendLoading] = useState(false);

    const Get = async (id) => {


        if (!id) return

        setLoading(true)

        try {
            const res = await fetch(`/api/messages/${id}`)
            const body = await res.json();
            if (body.error) {
                toast(body.error)
                console.log(body);
                return
            }
            console.log(body);
            setmsg(body)


        } catch (error) {
            console.log(error);
        } finally {
            setLoading(true)
        }
    }


    const Sendmsg = async (msgi) => {
        console.log("send msg fun is called ");
        // console.log("msg is ", msgi, "id is ", id);
        if (!id) return
        if (!msgi.trim) return
        // console.log("all done");

        setSendLoading(true)

        try {
            const res = await fetch(`/api/messages/send/${id}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: msgi.trim() })


            })

            const body = await res.json()
            if (body.hasOwnProperty("error")) {
                console.log(body.error);
                return
            }

            msg ? msg.push(body) : setmsg([body])

            console.log(body);

        } catch (error) {
            console.log("Error while sending msg in SendMsg hook", error);

        } finally {
            setSendLoading(false)
        }
    }



    useEffect(() => {
        Get(id);
        console.log(msg);
    }, [id])

    return [msg, Get, loading, sendLoading, Sendmsg]
}

export default useChats
