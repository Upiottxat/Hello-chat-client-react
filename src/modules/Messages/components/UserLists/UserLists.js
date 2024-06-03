import React, { useEffect, useState } from 'react'
import NavSection from './components/NavSection'
import Users from './components/Users'
import useGetUsersList from '../../../../hooks/useGetUsersList'

const UserLists = () => {

    const [loading, List] = useGetUsersList();



    useEffect(() => {
        console.log(List);
    }, [])


    return (
        <div className='col d-flex   justify-content-center  align-items-start flex-column' style={{
            maxWidth: '400px', marginLeft: '1rem', height: '100%',
            overflow: 'auto',
            paddingRight: '0rem'

        }}>

            <NavSection ></NavSection>
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
        </div>
    )
}

export default UserLists
