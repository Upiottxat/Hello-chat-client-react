import React from 'react'
import Avatar from '../../Avatar'
import { useSelectedUserContext } from '../../../../../context/selectedUserContext'


const Users = ({ userDetails }) => {
    const { selectedUser, setSelectedUser } = useSelectedUserContext()

    return (
        <div className={'row  d-flex    justify-content-start p-1  align-items-center bg-light rounded'}

            style={{
                width: "100%",
                height: '100%',
                paddingRight: '1rem'

            }} onClick={() => {
                selectedUser ? userDetails._id === selectedUser._id ? setSelectedUser("") : setSelectedUser(userDetails) : setSelectedUser(userDetails)
            }}>
            <Avatar profilePic={userDetails.profilePic}></Avatar>

            <div className='col  d-flex   justify-content-around  align-items-center' style={{ marginRight: "2rem" }}>
                <figure className=' '> {userDetails.fullName || "GuestUser"}</figure>
            </div>
            <div className='col'>
                <span className='msgCount'></span>
            </div>
        </div>
    )
}

export default Users
