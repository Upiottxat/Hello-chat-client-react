import React, { useEffect, useState } from 'react'
import Avatar from '../../Avatar'
import { useAuthContext } from '../../../../../context/authContext'
import useGetUsersList from '../../../../../hooks/useGetUsersList'

const NavSection = ({ style }) => {
    const [SearchInput, setSearchInput] = useState("")
    const { authUser } = useAuthContext()
    const [loading, List, searchList, searchByUsername] = useGetUsersList()

    const handleSearchSummit = async (e) => {
        e.preventDefault()

        await searchByUsername(SearchInput)

    }

    const closeSearch = () => {
        setSearchInput("")
    }



    return (
        <div className=' d-flex position-relative  justify-content-end  align-items-center  flex-row mt-3 mb-2' style={{
            flex: 1, width: "100%",
            height: '4rem'
        }}>
            <div className="mb-3 mt-0  p-2  logo text-italic  font-logo" style={{
                position: 'absolute',
                top: 0,
                left: 2,
                fontStyle: 'italic',
                fontWeight: '400',
                fontSize: 'x-large'

            }} >
                <span className="lean">
                    <span>Hello</span>
                </span>
            </div>

            {
                <form onSubmit={handleSearchSummit}>





                    <div className="mb-4  search_input_container " style={{


                    }}>
                        <div className="box">
                            <div className="container-2">
                                <span className="icon">
                                    <i className={SearchInput ? "fa fa-close" : "fa fa-search"} onClick={closeSearch}></i></span>
                                <input id="search" type="search" placeholder="Search..." value={SearchInput} onChange={(e) => {
                                    setSearchInput(e.target.value)
                                }} />
                            </div>
                        </div>




                    </div>

                </form>
            }

            <div className='profilePic ' style={{
                marginRight: '1rem'
            }}>

                <Avatar width={"3rem"} height={"3rem"} profilePic={authUser ? authUser.profilePic : ""}></Avatar>
            </div>

        </div>
    )
}

export default NavSection
