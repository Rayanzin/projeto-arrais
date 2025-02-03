import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Input } from "antd";
import { useRef } from "react";

const Login = () => {

    const usuarioValue = useRef()
    const senhaValue = useRef()

  async  function login() {
        const usuario = usuarioValue.current.input.value
        const senha = senhaValue.current.input.value
        if (usuario == '') {
            alert("Preencha o Usuario!")
            return;
        }
        if (senha == '') {
            alert("Preencha a senha!")
            return;
        }
        console.log("Email:", usuario);
        console.log("Senha:", senha);

        const request = await fetch("https://projeto-arrais-api.onrender.com/usuario/login", {
            method: "POST",
            headers: {  
                "content-type": "application/json"
            },
            body: JSON.stringify({usuario, senha})
        })
        const response = await request.json()
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <form className="w-1/4 p-4 border rounded-md">
                <Input
                    ref={emailValue}
                    className="mb-3"
                    placeholder="Enter your username"
                    prefix={<UserOutlined className="text-black/25" />}
                />
                <Input.Password ref={senhaValue} className="mb-3" placeholder="input password" />
                <div className="flex justify-between *:w-[48%]">
                    <Button href="/" type="primary" className="p-[0px] bg-laranja hover:!bg-laranja2">
                        Voltar
                    </Button>
                    <Button type="primary" onClick={login} className="p-[0px] bg-laranja hover:!bg-laranja2">
                        Entrar
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Login;