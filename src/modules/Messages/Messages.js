import React, { useEffect } from 'react'
import UserLists from './components/UserLists/UserLists'
import MessagesContainer from './components/MessagesContainer/MessagesContainer'
import { useState } from 'react'

const Messages = () => {



    return (
        <div className='  d-flex   justify-content-center  align-items-center flex-row' style={{
            height: '100%',
            width: '100%',
        }}>



            <div className=' row d-flex   justify-content-center  align-items-start flex-row' style={{
                height: "100%",
                width: '100%',
                // margin: '0',
                // padding: 0
            }}>
                <UserLists ></UserLists>
                <div className='col ' style={{
                    padding: '0rem',

                }}>
                    <MessagesContainer></MessagesContainer>

                </div>




            </div>




        </div>
    )
}

export default Messages
