import React, { useEffect } from 'react'
import Avatar from '../../Avatar'

import { useState } from 'react'
import { useSelectedUserContext } from '../../../../../context/selectedUserContext'
import { useAuthContext } from '../../../../../context/authContext'
const MsgNav = () => {

    const { selectedUser, setSelectedUser } = useSelectedUserContext()
    const { authUser } = useAuthContext()
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
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='' style={{
                            paddingLeft: '0.1rem',
                            marginRight: '0.5rem',
                            display: window.innerWidth > 630 ? "none" : "flex"
                        }}

                            onClick={() => {
                                {
                                    setSelectedUser(null)
                                }
                            }}
                        >
                            <i className='fa fa-arrow-left' ></i>
                        </div>

                        <Avatar height={"3rem"} width={"3rem"} profilePic={selectedUser ? selectedUser.profilePic : authUser ? authUser.profilePic : ""}></Avatar></div>
                </div>
                <div className="container-fluid">

                    <a className="navbar-brand" href="#">
                        {
                            selectedUser ? selectedUser.hasOwnProperty("_id") ? selectedUser.fullName : authUser ? authUser.fullName : "GuestUser" : authUser ? authUser.fullName : "GuestUser"
                        }

                    </a>
                </div>
            </nav>

        </div>
    )
}

export default MsgNav
