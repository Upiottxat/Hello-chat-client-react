import React, { Component, useEffect, useReducer, useRef, useState } from 'react'
import { useSelectedUserContext } from '../../../../../context/selectedUserContext';
import Lottie from "react-lottie"
import animationData from '../../../../../Animations/lottie/Lets_Chat_Animation_lottie.json'
import loadingAnimationData from '../../../../../Animations/lottie/C loadiing re loading Animation lottie.json'
import useChats from '../../../../../hooks/useChats';




const ChatsContainer = () => {
    const userLoggedIn = JSON.parse(localStorage.getItem("authUser"));
    const { selectedUser } = useSelectedUserContext()

    const [msgi, setMsg] = useState("");
    // const { selectedUser } = useSelectedUserContext();
    const [msg, Get, loading, sendLoading, Sendmsg] = useChats(selectedUser ? selectedUser._id : "");
    const [msgThatSend, setMsgThatSend] = useChats()

    const scrollRef = useRef(null)


    //animations default defaultOptions
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const loadingdefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }

    };
    const scrollToBottom = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    };



    const handleSendmsg = async () => {

        if (!msgi) return;
        if (!selectedUser) return console.log("user not selected")

        const message = await Sendmsg(selectedUser._id, msgi);


        setMsg("");

        // setMsgThatSend(message);


        // await Get(selectedUser._id);
        // await z(selectedUser._id)
        // setmsg([...msg,msgi])
    };


    useEffect(() => {

        // Get(selectedUser ? selectedUser._id : "")
        scrollToBottom();

    }, [msg]);
    useEffect(() => {
        scrollToBottom();
    })




    console.log(msg);
    return (
        <React.Fragment >

            <div className='' ref={scrollRef} style={{ height: '100%', width: '100%', overflowY: 'auto', overflowX: "hidden" }}>

                {selectedUser ?

                    msg.length > 0 ? msg.map((val, index) => {
                        console.log(msg);

                        return (
                            <React.Fragment key={index}>

                                <div className='row' style={{

                                    flexWrap: 'wrap'

                                }}>
                                    <div className={'text d-flex  align-items-center '} style={{
                                        justifyContent: val.senderId === userLoggedIn._id ? "flex-end" : "flex-start",

                                    }}>
                                        <span className='border p-2 m-1' style={{
                                            borderRadius: '20px',
                                            background: val.senderId === userLoggedIn._id ? "royalblue" : "#ffffff",
                                            color: val.senderId === userLoggedIn._id ? "#fff" : "#000",
                                            maxWidth: '60%',
                                            flexWrap: 'wrap',
                                            height: 'auto'


                                        }}> {val.message}</span>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    }) : selectedUser ? (<div className="">
                        {


                            loading ? <div className=' d-flex   justify-content-center  align-items-center  flex-column'>

                                <Lottie options={loadingdefaultOptions}
                                    height={400}
                                    width={400}
                                ></Lottie>
                                <div className='para text-center'>
                                    <span className='lead'>


                                        Loading...
                                    </span>
                                </div>
                            </div> :
                                //chat box is empty
                                <div className=''>
                                    {
                                        //no user is selected to chat width
                                        // console.log(selectedUser)
                                    }

                                    <Lottie
                                        options={defaultOptions}
                                        height={400}
                                        width={400}
                                    />
                                    <div className='para text-center'>
                                        <span className='lead'>

                                            Start a new conversation
                                        </span>
                                    </div>

                                </div>

                        }
                    </div>) : (
                        <div className=''>
                            {
                                //no user is selected to chat width
                                // console.log(selectedUser)
                            }

                            <Lottie
                                options={defaultOptions}
                                height={400}
                                width={400}
                            />
                            <div className='para text-center'>
                                <span className='lead'>

                                    Start a new conversation
                                </span>
                            </div>

                        </div>
                    ) :
                    <div className=''>
                        {
                            //no user is selected to chat width
                            // console.log(selectedUser)
                        }

                        <Lottie
                            options={defaultOptions}
                            height={400}
                            width={400}
                        />
                        <div className='para text-center'>
                            <span className='lead'>

                                Start a new conversation
                            </span>
                        </div>

                    </div>
                }

                {    // <Input></Input>
                }


            </div>
            {selectedUser ? <div
                className="form p-2"
                style={{
                    width: "100%",
                    height: "3rem",
                    paddingBottom: "1rem",
                }}
            >
                <div className="position-relative d-flex   justify-content-center  align-items-center ">
                    <input
                        type="text"
                        className="form-control  border-dark shadow "
                        value={msgi}
                        placeholder="Send a message"
                        name="msg"
                        id="msg"
                        onChange={(e) => {
                            setMsg(e.target.value);
                        }}
                        style={{
                            borderRadius: "50px",
                            marginBottom: "0.5rem",
                            paddingRight: "3rem",
                        }}
                    />
                    <div
                        className="send-btn mb-1 position-absolute  d-flex   justify-content-center  align-items-center "
                        style={{
                            right: "1.5%",
                        }}
                    >
                        <i
                            className="fa fa-paper-plane text-primary send-btn-hover "
                            onClick={handleSendmsg}
                        ></i>
                    </div>
                </div>
            </div> : <div></div>}







        </React.Fragment>
    )
}

export default ChatsContainer
