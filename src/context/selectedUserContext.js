import { Children, createContext, useContext, useState } from "react";

export const SelectedUserContext = createContext()


export const useSelectedUserContext = () => {
    return useContext(SelectedUserContext)
}
export const SelectedUserContextProvider = ({ children }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    return <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>{children}</SelectedUserContext.Provider>
}