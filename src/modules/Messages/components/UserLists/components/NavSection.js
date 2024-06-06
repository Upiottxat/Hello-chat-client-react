import React, { useState } from 'react'
import Avatar from '../../Avatar'
import { useAuthContext } from '../../../../../context/authContext'

const NavSection = ({ style }) => {
    const [SearchInput, setSearchInput] = useState("")
    const { authUser } = useAuthContext()

    const handleSearchSummit = (e) => {

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


            <form>





                <div className="mb-4  search_input_container " style={{


                }}>
                    <div className="box">
                        <div className="container-2"><span className="icon"><i className="fa fa-search"></i></span>
                            <input id="search" type="search" placeholder="Search..." />
                        </div>
                    </div>







                    {

                        // <div style={{ position: 'relative' }} className='input-group  search-container'>
                        //     {
                        //         //     <div style={{
                        //         //     position: 'absolute', width: '2rem', height: '2rem', borderRadius: '50%'

                        //         // }} className='d-flex   justify-content-start input-group-text align-items-center bg-primary '>
                        //         //     <i className='fa fa-search'></i>
                        //         // </div>
                        //     }
                        //     <div className="input-group-text bg-primary text-white p-2 " style={{
                        //         borderRadius: "50%",
                        //         zIndex: "1000",
                        //         position: 'absolute',
                        //         top: 2
                        //     }}>
                        //         <i className='fa fa-search  search-icon'></i></div>

                        //     <input type="text" value={SearchInput} onChange={(e) => { setSearchInput(e.target.value) }} className="form-control shadow search-input" id="Search"

                        //         placeholder='Search' style={{ outline: 'none ', borderRadius: '50px', paddingLeft: "3rem", zIndex: 500, }} />
                        // </div>

                    }


                </div>

            </form>
            <div className='profilePic ' style={{
                marginRight: '1rem'
            }}>

                <Avatar width={"3rem"} height={"3rem"} profilePic={authUser ? authUser.profilePic : ""}></Avatar>
            </div>

        </div>
    )
}

export default NavSection
