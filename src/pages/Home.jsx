import { Table } from "antd";
import { useEffect, useState } from "react";
const Home = () => {

    const [Dados, setDados] = useState([])

    function buscarDados() {
        let url = 'https://projeto-arrais-api.onrender.com/aquisicoes'
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setDados(res)
            })
    }
    useEffect(() => {
        buscarDados()
    }, [])

    return (
        <>
            <section>
                <h1 className="text-2xl font-bold mb-4">Tabela de veículos</h1>
                <Table dataSource={Dados}>
                    <Table.Column
                        key={"CD_AQUISICAO"}
                        title={"ID"}
                        dataIndex={"CD_AQUISICAO"}
                        className="w-[50px]"
                    />
                    <Table.Column
                        key={"NR_PLACA"}
                        title={"Placa"}
                        dataIndex={"NR_PLACA"}
                    />
                    <Table.Column
                        key={"NM_COR"}
                        title={"Cor"}
                        dataIndex={"NM_COR"}
                    />
                    <Table.Column
                        key={"NM_ANO"}
                        title={"Ano"}
                        dataIndex={"NM_ANO"}
                    />
                    <Table.Column
                        key={"NM_MODELO"}
                        title={"Modelo"}
                        dataIndex={"NM_MODELO"}
                    />
                    <Table.Column
                        key={"VL_VEICULO"}
                        title={"Valor"}
                        dataIndex={"VL_VEICULO"}
                    />
                </Table>
            </section>
        </>
    );
}

export default Home;