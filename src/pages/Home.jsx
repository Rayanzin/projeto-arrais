import { Button } from "antd";

const Home = () => {
    return (
        <>
            <div className="w-full h-[50px] flex justify-end items-center">
                <Button type="primary" size="large" className="bg-laranja hover:!bg-laranja2">
                    <a href="/login">Login</a>
                </Button>
            </div>
            <section>
                <h1 className="text-2xl font-bold mb-4">Tabela de veículos</h1>

            </section>
        </>
    );
}

export default Home;