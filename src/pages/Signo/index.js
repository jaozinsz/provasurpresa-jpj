import { useState, useEffect } from "react";
import './index.scss'
import { useNavigate } from "react-router-dom";


export default function Signo() {
    const [mes, setMes] = useState('')
    const [ dia, setDia] = useState('')
    const [final, setFinal] = useState('')

    

    function Calcular() {
        if(mes == 'setembro' && dia >= 23 || 'outubro' && dia <=22){
            setFinal('seu signo é libra doidão')

        }
        else{
            setFinal('seu signo n é libra mané')
        }

      
    }

    useEffect(() => {
        Calcular()
    }, [mes, dia])
    const navigate = useNavigate();

    return(
        <main>
            signo

            <div>
                mês  <input type='text' value={mes} onChange={e => setMes(String(e.target.value))}/>
            </div>

            
            <div>
                dia <input type='number' value={dia} onChange={e => setDia
                    (Number(e.target.value))}/>
            </div>


            <div>
                
                 {final}
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
