import { Button } from "antd";
import logo from "../assets/logo-arrais.webp"
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContexts";
const Header = () => {

    const { usuario, setUsuario } = useContext(LoginContext)

    return (
        <header className="w-2/12 h-screen p-4 border-r">
            <a href="/">
                <img
                    src={logo}
                    alt="Arrais Veículos"
                    className="m-auto"
                />
            </a>
            {
                usuario ? (
                    <>
                        <h6 className="text-lg">{usuario.NM_USUARIO}</h6>
                        <h6>{usuario.NM_CARGO}</h6>
                        <Button type="primary" size="large" className="text-white w-full p-[0px] bg-laranja hover:!bg-laranja2" onClick={() => { setUsuario(); sessionStorage.removeItem("usuario") }}>sair</Button>
                    </>
                ) : (
                    <Button href="/login" type="primary" size="large" className="mt-6 p-[0] w-full bg-laranja hover:!bg-laranja2">
                        Login
                    </Button>
                )
            }
        </header>
    );
}

export default Header;