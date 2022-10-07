import React from "react";
import { useState, useEffect } from "react";
import './index.scss'
import { useNavigate } from "react-router-dom";

export default function Sorveteria() {
    const navigate = useNavigate();
    const [gramas, setGramas] = useState('')
    const [ final, setFinal] = useState('')
   

    function Calcular() {
        let total = 0
        
       if( gramas <= 0){
        alert('peso invalido')

       }
        if (gramas > 1000) {
            total = (gramas) * 0.3
        }
        else{
            total = (gramas/10) * 0.35
        }
    setFinal(total)
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
