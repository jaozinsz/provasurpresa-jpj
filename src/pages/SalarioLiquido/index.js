import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Salario } from "../../services";
import './index.scss'

export default function SalarioLiquido() {
    const [salario, setSalario] = useState('')
    const [bonus, setBonus] = useState('')
    const [desc, setDesc] = useState('')

    const [total, setTotal] = useState(0)


    function CalcularSalario() {
        try {
            const resposta = Salario(salario, bonus, desc)
            setTotal(resposta);
    
        } catch (err) {
            return (err.message);
        }
    }


    useEffect(() => {
        CalcularSalario()
    },[salario, bonus, desc])
    const navigate = useNavigate();

    return(
        <main>
            <h1>Calcular Salário Líquido</h1>

            <div>
            <label>Seu Salário</label>
             <input type="number" value={salario} onChange={e => setSalario(Number(e.target.value))}/>
            </div>

            <div>
            <label>Bônus em porcentagem</label>
            <input type="number" value={bonus} onChange={e => setBonus(Number(e.target.value))}/>
            </div>

            <div>
            <label>Desconto</label>
            <input type="number" value={desc} onChange={e => setDesc(Number(e.target.value))}/>
            </div>

            <div>
                <label>
                    o total é {total}
                </label>
            </div>

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
        </main>
    )
}