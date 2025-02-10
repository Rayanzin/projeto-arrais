import { createContext, useState } from "react";

export const LoginContext = createContext()

const LoginProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({
        nome: "Edmilson",
        cargo: "Admin"
    })
    return (
        <LoginContext.Provider value={{usuario, setUsuario}}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;