import React, { useEffect } from 'react'
import { useSelectedUserContext } from '../../../../../context/selectedUserContext';
import Lottie from "react-lottie"
import animationData from '../../../../../Animations/lottie/Lets_Chat_Animation_lottie.json'
import loadingAnimationData from '../../../../../Animations/lottie/C loadiing re loading Animation lottie.json'
import useChats from '../../../../../hooks/useChats';
const ChatsContainer = () => {
    const userLoggedIn = JSON.parse(localStorage.getItem("authUser"));
    const { selectedUser } = useSelectedUserContext()
    const [msg, Get, loading] = useChats(selectedUser ? selectedUser._id : "");


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

    useEffect(() => {
        Get()
    }, []);

    console.log(msg);
    return (
        <div className='' style={{ height: '100%', width: '100%', overflowY: 'auto', overflowX: "hidden" }}>
            {

                msg ? msg.map((val, index) => {

                    return (
                        <React.Fragment key={index}>

                            <div className='row' >
                                <div className={'text d-flex  align-items-center '} style={{
                                    justifyContent: val.senderId === userLoggedIn._id ? "flex-end" : "flex-start"
                                }}>
                                    <span className='border p-2 m-1' style={{
                                        borderRadius: '50px',
                                        background: val.senderId === userLoggedIn._id ? "purple" : "#ffffff",
                                        color: val.senderId === userLoggedIn._id ? "#fff" : "#000"
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
                            <div className='d-flex   justify-content-center  align-items-center  flex-column'>
                                <div className='para text-center'>
                                    <span className='lead'>

                                        "Say hello to start a conversation"
                                    </span>
                                </div>
                            </div>

                    }
                </div>) : (
                    <div className=''>
                        {
                            //no user is selected to chat width
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
                )
            }
        </div>
    )
}

export default ChatsContainer
