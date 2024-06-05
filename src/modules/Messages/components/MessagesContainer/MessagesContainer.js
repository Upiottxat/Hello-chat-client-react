import React, { useState } from 'react'
import MsgNav from './components/MsgNav'
import ChatsContainer from './components/ChatsContainer'

import useChats from '../../../../hooks/useChats'
import { useSelectedUserContext } from '../../../../context/selectedUserContext'

const MessagesContainer = () => {
    const { selectedUser } = useSelectedUserContext()
    // const [msg, Get, loading, sendLoading, Sendmsg] = useChats();
    // useState(() => {
    //     console.log("state is updatign ");
    //     Get(selectedUser ? selectedUser._id : "")
    // }, [msg])






    return (
        <div className='border   justify-content-center  align-items-start flex-column  ' style={{
            height: "100vh",
            flex: 1,
            minWidth: window.innerWidth > 630 ? "320" : window.innerWidth,
            display: window.innerWidth > 630 ? "flex" : selectedUser ? "flex" : "none",
            overflowX: "hidden"
        }}>
            <MsgNav></MsgNav>
            <ChatsContainer></ChatsContainer>


        </div>
    )
}

export default MessagesContainer
