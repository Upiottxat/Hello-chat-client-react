import React, { useEffect } from 'react'
import Avatar from '../../Avatar'

import { useState } from 'react'
import { useSelectedUserContext } from '../../../../../context/selectedUserContext'
const MsgNav = () => {

    const { selectedUser } = useSelectedUserContext()
    useEffect(() => {
        console.log(selectedUser);
    })
    return (
        <div className='border shadow-sm' style={{
            width: '100%', height: '4rem'

        }}>
            <nav className="d-flex justify-content-center align-items-center bg-light flex-row" style={{
                height: '100%',
            }}>
                <div style={{
                    marginLeft: '1rem'
                }}>

                    <Avatar height={"3rem"} width={"3rem"} profilePic={selectedUser ? selectedUser.profilePic : ''}></Avatar></div>
                <div className="container-fluid">

                    <a className="navbar-brand" href="#">
                        {
                            selectedUser ? selectedUser.hasOwnProperty("_id") ? selectedUser.fullName : "GuestUser" : "GuestUser"
                        }

                    </a>
                </div>
            </nav>

        </div>
    )
}

export default MsgNav
