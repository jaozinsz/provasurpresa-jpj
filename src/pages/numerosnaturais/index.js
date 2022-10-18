import React from "react";
import { useState, useEffect } from "react";
import './index.scss'
import { useNavigate } from "react-router-dom";
import { contarAte } from "../../services";


export default function ContarAtee() {
    const [inicio, setInicio] = useState('')
    const [fim, setFim] = useState('')
    

    const [total, setTotal] = useState()


    function contar() {
        try {
            const resposta = contarAte(inicio, fim)
            setTotal(resposta);
    
        } catch (err) {
            return (err.message);
        }
    }


    useEffect(() => {
        contar()
    },[inicio, fim])
    const navigate = useNavigate();

    return(
        <main>
            <h1>Contar os números</h1>

            <div>
            <label>Inicio</label>
             <input type="number" value={inicio} onChange={e => setInicio(Number(e.target.value))}/>
            </div>

            <div>
            <label>Fim</label>
            <input type="number" value={fim} onChange={e => setFim(Number(e.target.value))}/>
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


