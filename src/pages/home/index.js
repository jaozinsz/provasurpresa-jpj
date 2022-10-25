import React from "react";
import { useNavigate } from "react-router-dom";
import './index.scss'



export default function Index() {
    const navigate = useNavigate();

    return (
        <main>

            <section className="sec-1-acai">
                <div className="div-btn-acai">
                    <button
                        className="btn-simple-acai"
                        onClick={async () => {
                            try {
                                navigate("/VendaAcai")
                            } catch (err) {

                            }
                        }}>
                        Venda acai
                    </button>
                </div>
            </section>



            <section className="sec-2-signo">
                <div className="div-btn-signo">
                    <button
                        className="btn-simple-signo"
                        onClick={async () => {
                            try {
                                navigate("/Signo")
                            } catch (err) {

                            }
                        }}>
                        libra or not
                    </button>
                </div>


            </section>



            <section className="sec-3-sorv">
                <div className="div-btn-sorv">
                    <button
                        className="btn-simple-sorv"
                        onClick={async () => {
                            try {
                                navigate("/Sorveteria")
                            } catch (err) {

                            }
                        }}>
                        Calcular Sorvete
                    </button>
                </div>
            </section>

            <div className="div-btn-salario">
                <button
                    className="btn-simple-salario"
                    onClick={async () => {
                        try {
                            navigate("/SalarioLiquido")
                        } catch (err) {

                        }
                    }}>
                    Seu Salario Liquido
                </button>
            </div>

            <div className="div-btn-salario">
                <button
                    className="btn-simple-salario"
                    onClick={async () => {
                        try {
                            navigate("/Combustivel")
                        } catch (err) {

                        }
                    }}>
                    Calcular Combustivel
                </button>
            </div>


            
            <div className="div-btn-sorv">
                <button
                    className="btn-simple-sorv"
                    onClick={async () => {
                        try {
                            navigate("/Temperatura")
                        } catch (err) {

                        }
                    }}>
                    tá com febre?
                </button>
            </div>


            <div className="div-btn-sorv">
                <button
                    className="btn-simple-sorv"
                    onClick={async () => {
                        try {
                            navigate("/Ingresso")
                        } catch (err) {

                        }
                    }}>
                    Calcular ingresso
                </button>
            </div>


            <div className="div-btn-salario">
                <button
                    className="btn-simple-salario"
                    onClick={async () => {
                        try {
                            navigate("/SalarioLiquido")
                        } catch (err) {

                        }
                    }}>
                    Seu Salario Liquido
                </button>
            </div>

            <div className="div-btn-salario">
                <button
                    className="btn-simple-salario"
                    onClick={async () => {
                        try {
                            navigate("/Combustivel")
                        } catch (err) {

                        }
                    }}>
                    Calcular Combustivel
                </button>
            </div>

            <div className="div-btn-sorv">
                <button
                    className="btn-simple-sorv"
                    onClick={async () => {
                        try {
                            navigate("/orcamento")
                        } catch (err) {

                        }
                    }}>
                    Orçamento Familiar
                </button>
            </div>
            
            <div className="div-btn-sorv">
                <button
                    className="btn-simple-sorv"
                    onClick={async () => {
                        try {
                            navigate("/contar")
                        } catch (err) {

                        }
                    }}>
                    Contar Até
                </button>
            </div>

            <div className="div-btn-sorv">
                <button
                    className="btn-simple-sorv"
                    onClick={async () => {
                        try {
                            navigate("/linhas")
                        } catch (err) {

                        }
                    }}>
                    Linhas
                </button>
            </div>

            <div className="div-btn-sorv">
                <button
                    className="btn-simple-sorv"
                    onClick={async () => {
                        try {
                            navigate("/retangulo")
                        } catch (err) {

                        }
                    }}>
                    Desenhar Retangulo
                </button>
            </div>

            <div className="div-btn-sorv">
                <button
                    className="btn-simple-sorv"
                    onClick={async () => {
                        try {
                            navigate("/JurosComposto")
                        } catch (err) {

                        }
                    }}>
                    Juros Compostos
                </button>
            </div>

            <div className="div-btn-sorv">
                <button
                    className="btn-simple-sorv"
                    onClick={async () => {
                        try {
                            navigate("/cafe")
                        } catch (err) {

                        }
                    }}>
                    Café :3
                </button>
            </div>

            <div className="div-btn-sorv">
                <button
                    className="btn-simple-sorv"
                    onClick={async () => {
                        try {
                            navigate("/aluno")
                        } catch (err) {

                        }
                    }}>
                    ALunoo
                </button>
            </div>
        </main>

    );
}