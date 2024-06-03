import React from 'react'
import Messages from '../../modules/Messages/Messages'
import "./home.css"
import { SelectedUserContextProvider } from '../../context/selectedUserContext'
const Home = () => {
    return (
        <React.Fragment >
            <SelectedUserContextProvider>
                <Messages />
            </SelectedUserContextProvider>



        </React.Fragment>
    )
}

export default Home
