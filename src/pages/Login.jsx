import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Input } from "antd";

const Login = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <form className="w-1/4 p-4 border rounded-md">
                <Input className="mb-3"
                    placeholder="Enter your username"
                    prefix={
                        <UserOutlined className="text-black/25" />
                    }
                />
                <Input.Password className="mb-3" placeholder="input password" />
                <div className="flex justify-between *:w-[48%]">
                    <Button type="primary" className="bg-laranja hover:!bg-laranja2">
                        <a href="/">Voltar</a>
                    </Button>
                    <Button type="primary" className="bg-laranja hover:!bg-laranja2">Entrar</Button>
                </div>
            </form>
        </div>
    );
}

export default Login;