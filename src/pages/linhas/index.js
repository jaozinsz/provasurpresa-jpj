import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Linhas } from "../../services";


export default function Linhass() {
    const [qtd, setQtd] = useState('')
    const [total, setTotal] = useState('')


    function linha() {
        try {
            const resposta = Linhas(qtd)
            setTotal(resposta);
    
        } catch (err) {
            return (err.message);
        }
    }


    useEffect(() => {
        linha()
    },[qtd])
    const navigate = useNavigate();

    return(
        <main>
            <h1>Desenhar Linha</h1>

            <div>
            <label>Tamanho</label>
             <input type="number" value={qtd} onChange={e => setQtd(Number(e.target.value))}/>
            </div>

            <div>

                
                
               <nbsp></nbsp> {total}
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


