import React from "react";
import { useState, useEffect } from "react";
import './index.scss'
import { useNavigate } from "react-router-dom";

export default function Acai() {
    const [qtdPeq, setQtdPeq] = useState('')
    const [ qtdMed, setQtdMed] = useState('')
    const [qtdGrande, setQtdGrande] = useState('')

    const [desc, setDesc] = useState('')
    const [total, setTotal] = useState('')

    function Calcular() {
        let total = qtdPeq * 13.50 + qtdMed * 15 + qtdGrande * 17.50;
        let desconto = total * desc / 100;

        let final = total - desconto;
        setTotal(final)
    }

    useEffect(() => {
        Calcular()
    }, [qtdPeq, qtdMed, qtdGrande, desc])
    const navigate = useNavigate();

    return(
        <main>
            Açaí

            <div>
                Quantidade Pequena: <input type='number' value={qtdPeq} onChange={e => setQtdPeq(Number(e.target.value))}/>
            </div>

            
            <div>
                Quantidade Média: <input type='number' value={qtdMed} onChange={e => setQtdMed
                    (Number(e.target.value))}/>
            </div>

            
            <div>
                Quantidade Grande: <input type='number' value={qtdGrande} onChange={e => setQtdGrande(Number(e.target.value))}/>
            </div>

            
            <div>
                Desconto: <input type='number' value={desc} onChange={e => setDesc(Number(e.target.value))}/>
            </div>

            <div>
                <br/>
                O total é {total}
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
