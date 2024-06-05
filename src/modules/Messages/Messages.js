import React, { useEffect } from 'react'
import UserLists from './components/UserLists/UserLists'
import MessagesContainer from './components/MessagesContainer/MessagesContainer'
import { useState } from 'react'



const Messages = () => {



    return (
        <div className='  d-flex   justify-content-start  align-items-start  flex-row' style={{
            height: '100%',
            width: '100%',
        }}>




            <UserLists ></UserLists>

            <MessagesContainer></MessagesContainer>







        </div>
    )
}

export default Messages
