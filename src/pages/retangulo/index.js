import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Retangulo } from "../../services";


export default function Retanguloo() {
    const [base, setBase] = useState('')
    const [altura, setAltura] = useState('')
    const [simbolo, setSimbolo] = useState('')
    
    const [total, setTotal] = useState('')


    function retangulo() {
        try {
            const resposta = Retangulo(base, altura, simbolo)
            setTotal(resposta);
    
        } catch (err) {
            return (err.message);
        }
    }


    useEffect(() => {
        retangulo()
    },[base, altura, simbolo])
    const navigate = useNavigate();

    return(
        <main>
            <h1>Desenhar Retangulo</h1>

            <div>
            <label>base</label>
             <input type="number" value={base} onChange={e => setBase(Number(e.target.value))}/>
            </div>

            <div>
            <label>altura</label>
             <input type="number" value={altura} onChange={e => setAltura(Number(e.target.value))}/>
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


