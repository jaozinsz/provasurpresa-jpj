import React from "react";
import { useState, useEffect } from "react";
import './index.scss'
import { useNavigate } from "react-router-dom";

export default function Acai() {
    const [qtdPeq, setQtdPeq] = useState(0)
    const [ qtdMed, setQtdMed] = useState(0)
    const [qtdGrande, setQtdGrande] = useState(0)

    const [desc, setDesc] = useState(0)
    const [total, setTotal] = useState(0)

    function Calcular() {
        if(qtdPeq >= 0 && qtdMed >= 0 && qtdGrande >= 0 && desc >=0){
        let total = qtdPeq * 13.50 + qtdMed * 15 + (qtdGrande * 17.50);
        let desconto = total * desc / 100;

        let final = total - desconto;
        setTotal(final)}


        
        else{
            setTotal('invaaliddoooo')
        }
    }

    useEffect(() => {
        Calcular()
    }, [qtdPeq, qtdMed, qtdGrande, desc])
    const navigate = useNavigate();

    return(
        <main className="page-acai">
            Açaí

            <div>
            <label>Quantidade Pequena:</label>  <input className="cx1" type='number' value={qtdPeq} onChange={e => setQtdPeq(Number(e.target.value))}/>
            </div>

            
            <div>
            <label>Quantidade Média:</label> <input className="cx2" type='number' value={qtdMed} onChange={e => setQtdMed
                    (Number(e.target.value))}/>
            </div>

            
            <div>
            <label>Quantidade Grande:</label><input className="cx3" type='number' value={qtdGrande} onChange={e => setQtdGrande(Number(e.target.value))}/>
            </div>

            
            <div>
            <label>Desconto:</label><input className="cx4" type='number' value={desc} onChange={e => setDesc(Number(e.target.value))}/>
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
