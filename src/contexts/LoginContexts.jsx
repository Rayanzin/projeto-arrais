import { createContext, useState } from "react";

export const LoginContext = createContext()

const LoginProvider = ({ children }) => {

const sessionData = sessionStorage.getItem("usuario") ? JSON.parse(sessionStorage.getItem("usuario")) : null

    const [usuario, setUsuario] = useState(sessionData)

    return (
        <LoginContext.Provider value={{usuario, setUsuario}}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;