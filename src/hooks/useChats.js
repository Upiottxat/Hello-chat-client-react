import React, { useEffect, useState } from 'react'
import toast, { } from "react-hot-toast"
import io from 'socket.io-client';
import { useAuthContext } from '../context/authContext';
import { useSelectedUserContext } from '../context/selectedUserContext';
const ENDPOINT = '/';

var socket, selectedChatCompare;

const useChats = () => {

    const [msg, setmsg] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sendLoading, setSendLoading] = useState(false);
    const [socketConnected, setSocketConnected] = useState(false);
    const { authUser } = useAuthContext();
    const { selectedUser } = useSelectedUserContext()
    const [justMsgSend, setJustMsgSend] = useState([]);

    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit("setup", authUser)
        socket.on("connection", () => setSocketConnected(true))
    }, [])

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



            socket.emit("join room", id)

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }


    const Sendmsg = async (id, msgi) => {
        if (!id || !msgi.trim()) return; // Check for valid ID and non-empty message
        setSendLoading(true);

        try {
            const res = await fetch(`/api/messages/send/${id}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: msgi.trim() })
            });

            const body = await res.json();
            if (body.hasOwnProperty("error")) {
                console.log(body.error);
                return;
            }

            // Update state with the new message
            console.log("msg send success", body);


            console.log("before  msg is ", msg);

            socket.emit('new message', body); // Emit new message event to the socket
            await Get(selectedUser._id)
            return body
        } catch (error) {
            console.log("Error while sending msg in SendMsg hook", error);
            return
        } finally {
            setSendLoading(false);
        }
    }



    useEffect(() => {
        Get(selectedUser ? selectedUser._id : "");
        console.log(msg);
        selectedChatCompare = selectedUser;

    }, [selectedUser])

    useEffect(() => {

        socket.on("message received", (newMessageRecieved) => {
            if (!selectedChatCompare || selectedChatCompare._id !== newMessageRecieved.senderId) {
                //give notification

            } else {
                setmsg([...msg, newMessageRecieved])
                console.log(msg);
            }
        })
    })



    return [msg, Get, loading, sendLoading, Sendmsg, justMsgSend, setmsg]
}

export default useChats



