import { useState, useEffect } from "react";
import './index.scss'
import { useNavigate } from "react-router-dom";
import { CalculoOrcamento } from "../../services";


export default function Orcamento() {
    
    const [ganhos, setGanhos] = useState();
    const [gastos, setGastos] = useState();

    const [total, setTotal] = useState("");
    

    function Orcamento() {
        try {
            const resposta = CalculoOrcamento(gastos, ganhos)
            setTotal(resposta);
    
        } catch (err) {
            return (err.message);
        }
    }

    useEffect(() => {
        Orcamento()
    }, [gastos, ganhos])
    
    const navigate = useNavigate();

    return(
        <main>
            <h1>Calcular Orçamento Familiar</h1>

            <div>
                <label>Ganhos</label>
                <input type="number" value={ganhos} onChange={e => setGanhos(Number(e.target.value))} />
            </div>

            <div>
                <label>Gastos</label>
                <input type="number"  value={gastos} onChange={e => setGastos(Number(e.target.value))} />
            </div>


            <div>
                {total}
            </div>

            <section className="sec-1-acai">
            <div className="div-btn-acai">
        <button
            className="btn-simple-acai"
            onClick={async () => {
                try {
                    navigate("/")
                } catch (err) {
                    
                }
            }}>
            Voltar pra home
        </button>
    </div>
    </section>

        </main>
    )
}
