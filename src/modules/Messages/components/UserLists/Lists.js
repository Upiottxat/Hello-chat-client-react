import React, { useEffect, useState } from 'react'
import NavSection from './components/NavSection'
import Users from './components/Users'
import useGetUsersList from '../../../../hooks/useGetUsersList'
import { useSelectedUserContext } from '../../../../context/selectedUserContext'
import "./components/style.css"

const Lists = () => {

    const [loading, List, searchList] = useGetUsersList();
    const { selectedUser } = useSelectedUserContext()
    return (



        <React.Fragment>

            {
                List ? List.map((val, index) => {
                    return (

                        <React.Fragment key={index} >
                            <Users userDetails={val} ></Users>
                        </React.Fragment>


                    )
                }) :
                    <div className='   position-relative  ' style={{
                        flex: 1, width: '100%', height: '100%'


                    }}>
                        <div className="spinner-border text-center  text-secondary " role="status" style={{
                            width: "1.5rem", height: "1.5rem",

                            position: "absolute",
                            top: "50%",
                            left: '50%'
                        }}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

            }
        </React.Fragment>
    )
}

export default Lists
