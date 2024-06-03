import React from 'react'
import MsgNav from './components/MsgNav'
import ChatsContainer from './components/ChatsContainer'
import Input from './components/Input'

const MessagesContainer = () => {
    return (
        <div className='border d-flex   justify-content-center  align-items-start flex-column' style={{
            width: '100%', height: "100vh",
            minWidth: '320px',

        }}>
            <MsgNav></MsgNav>
            <ChatsContainer></ChatsContainer>
            <Input>
            </Input>
        </div>
    )
}

export default MessagesContainer
