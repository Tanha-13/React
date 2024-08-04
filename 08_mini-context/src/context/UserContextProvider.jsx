import React from "react";
import userContext from "./UserContext";
import PropTypes from 'eslint'

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);

    return(
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;

UserContextProvider.propTypes = {
    children: PropTypes.string.isRequired
}