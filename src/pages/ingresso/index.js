import { useState, useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router';
import './index.scss'

export default function CalcularIngresso(){

    const [meia, setMeia] = useState('');
    const [inteira, setInteira] = useState('');
    const [dia, setDia] = useState('');
    const [nacional, setNacional] = useState(false);
    const [total, setTotal] = useState('');

    function ingresso(){
       try {
        let msg = ''
        if(dia == "quarta-feira") {
            setTotal = (meia + inteira) * (28.5/2);
            msg = "O total a se pagar vai ser R$" + total;
        }

        else if (nacional == true) {
            setTotal = (meia + inteira) * 5;
            msg = "O total a se pagar vai ser R$" + total;

        }

        else {
            setTotal = (inteira * 28.5) + (meia * 28.5 / 2);
            msg = "O total a se pagar vai ser R$" + total;

        }

        setTotal(msg)
       } catch (err) {

       }
    }

    useEffect(() =>{
        ingresso()
    }, [meia, inteira, dia, nacional])
    const navigate = useNavigate();

    return (
        <main>
            Calcular ingresso
            <div>
                <label>meia</label>
                <input type="number" value={meia} onChange={e => setMeia(Number(e.target.value))} />
            </div>

            <div>
                <label>inteira</label>
                <input type="number" value={inteira} onChange={e => setInteira(Number(e.target.value))} />
            </div>

            <div>
                <label>dia</label>
                <input type="text" value={dia} onChange={e => setDia(String(e.target.value))} />
            </div>

            <div>
                <label>nacional</label>
                <input type="checkbox" checked={nacional} onChange={e => setNacional(Number(e.target.checked))} />
            </div>

            <div>
                <label>
                   {total}
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
    );
}

