import React from "react";
import { useState, useEffect } from "react";
import './index.scss'
import { useNavigate } from "react-router-dom";
import { Sorvete } from "../../services";

export default function Sorveteria() {
    const navigate = useNavigate();
    const [gramas, setGramas] = useState()
    const [final, setFinal] = useState()
   

    function Calcular() {
        try {
            const resposta = Sorvete(gramas)
            setFinal(resposta);
    
        } catch (err) {
            return (err.message);
        }
    }

    useEffect(() => {
        Calcular()
    }, [gramas])

    return(
        <main>
            Sorveteria

            <div>
                Gramas: <input type='number' value={gramas} onChange={e => setGramas(Number(e.target.value))}/>
            </div>

            
            <div>
                O total é {final}
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
