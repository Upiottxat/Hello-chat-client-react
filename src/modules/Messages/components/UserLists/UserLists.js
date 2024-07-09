import React, { useEffect, useState } from 'react'
import NavSection from './components/NavSection'
import Users from './components/Users'
import useGetUsersList from '../../../../hooks/useGetUsersList'
import { useSelectedUserContext } from '../../../../context/selectedUserContext'
import "./components/style.css"
import Lists from './Lists'
import SearchedUser from './components/searchedUser'

const UserLists = () => {

    const [loading, List, searchList] = useGetUsersList();
    const { selectedUser } = useSelectedUserContext()


    return (
        <div className='  row  justify-content-center  align-items-start flex-column' style={{
            maxWidth: '400px', height: '100%',
            overflow: 'auto',
            paddingLeft: '1rem',
            marginLeft: '0.2rem',
            width: window.innerWidth > 630 ? "60%" : "100%",
            display: window.innerWidth > 630 ? "flex" : selectedUser ? "none" : "flex"

        }}>

            <NavSection  ></NavSection>
            <Lists></Lists>

        </div>
    )
}

export default UserLists
