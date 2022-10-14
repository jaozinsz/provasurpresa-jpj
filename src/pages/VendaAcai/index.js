import React from "react";
import { useState, useEffect } from "react";
import './index.scss'
import { useNavigate } from "react-router-dom";
import { CalcularAcai } from '../../services';


export default function Acai() {
    const [qtdPeq, setQtdPeq] = useState(0)
    const [qtdMed, setQtdMed] = useState(0)
    const [qtdGrande, setQtdGrande] = useState(0)

    const [desc, setDesc] = useState(0)
    const [total, setTotal] = useState(0)

    function Acaii(){
        try {
            const resposta = CalcularAcai(qtdPeq, qtdMed, qtdGrande, desc)
            setTotal(resposta);
    
        } catch (err) {
            return (err.message);
        }
    }
    

    useEffect(() => {
        Acaii()
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
