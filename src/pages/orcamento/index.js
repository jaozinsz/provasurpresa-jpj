import { useState, useEffect } from "react";
import './index.scss'
import { useNavigate } from "react-router-dom";


export default function Orcamento() {
    
    const [ganhos, setGanhos] = useState(0);
    const [gastos, setGastos] = useState(0);

    const [total, setTotal] = useState("");
    

    function Orcamento() {
        try{
            var gastosPorcento = gastos / ganhos * 100;

            var msg = "";

            if(gastosPorcento < 30)
                msg = "Parabéns, está gerenciando vem seu orçamento!";
            if(gastosPorcento < 50)
                msg = "Muito bem, seus gastos não ultrapassam metade dos ganhos!";
            if(gastosPorcento < 81)
                msg = "Atenção, melhor conter os gastos!";
            if(gastosPorcento <= 100)
                msg = "Cuidado, seu orçamento pode ficar comprometido!";
            else
                msg = "Orçamento comprometido! Hora de rever seus gastos!";
            
            setTotal(msg);
        } catch (err){
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
