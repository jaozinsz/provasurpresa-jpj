import { useState, useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router';
import './index.scss'
import { Ingresso } from '../../services';

export default function CalcularIngresso(){

    const [meia, setMeia] = useState('');
    const [inteira, setInteira] = useState('');
    const [dia, setDia] = useState('');
    const [nacional, setNacional] = useState(false);
    const [total, setTotal] = useState('');

    function ingresso(){
       try {
        const resposta = Ingresso(dia, meia, inteira, nacional)
        setTotal(resposta);

       } catch (err) {
            return (err.message);
       }
    }

    useEffect(() =>{
        ingresso()
    }, [dia, meia, inteira, nacional])
    const navigate = useNavigate();

    return (
        <main>
            Calcular ingresso

            <div>
                <label>dia</label>
                <input type="text" value={dia} onChange={e => setDia(String(e.target.value))} />
            </div>

            <div>
                <label>meia</label>
                <input type="number" value={meia} onChange={e => setMeia(Number(e.target.value))} />
            </div>

            <div>
                <label>inteira</label>
                <input type="number" value={inteira} onChange={e => setInteira(Number(e.target.value))} />
            </div>

            <div>
                <label>nacional</label>
                <input type="checkbox" min={0} value={nacional} onChange={e => setNacional(e.target.checked)} />
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

