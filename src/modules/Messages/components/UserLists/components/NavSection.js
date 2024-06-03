import React, { useState } from 'react'

const NavSection = ({ style }) => {
    const [SearchInput, setSearchInput] = useState("")
    return (
        <div className=' d-flex   justify-content-start  align-items-center ' style={{
            flex: 1, width: "100%"
        }}>

            <form>
                <div className="mb-3  mt-3" style={{


                }}>


                    <div style={{ position: 'relative' }} className='input-group'>
                        {
                            //     <div style={{
                            //     position: 'absolute', width: '2rem', height: '2rem', borderRadius: '50%'

                            // }} className='d-flex   justify-content-start input-group-text align-items-center bg-primary '>
                            //     <i className='fa fa-search'></i>
                            // </div>
                        }
                        <div className="input-group-text bg-primary text-white p-2" style={{
                            borderRadius: "50%",
                            zIndex: "1000",
                            position: 'absolute',
                            top: 2
                        }}><i className='fa fa-search'></i></div>

                        <input type="text" value={SearchInput} onChange={(e) => { setSearchInput(e.target.value) }} className="form-control shadow" id="Search"

                            placeholder='Search' style={{ outline: 'none ', borderRadius: '50px', paddingLeft: "3rem", zIndex: 500, }} />
                    </div>


                </div>

            </form>

        </div>
    )
}

export default NavSection
