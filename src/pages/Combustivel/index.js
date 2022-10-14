import { useState, useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router';
import './index.scss'
import { Abastecimento } from '../../services';

export default function Combustivel() {

    const [capac, setCapac] = useState('');
    const [consumo, setConsumo] = useState('');
    const [dist, setDist] = useState('');

    const [total, setTotal] = useState('')

    function CalcularParadas() {
        try {
            const resposta = Abastecimento(capac, consumo, dist)
            setTotal(resposta);
    
        } catch (err) {
            return (err.message);
        }
    }

    useEffect(() =>{
        CalcularParadas()
    }, [capac, consumo, dist])
    const navigate = useNavigate();

    return (
        <main>
            <h1>Calcular Paradas de Abastecimento</h1>

            <div>
                <label>Capacidade do tanque </label>
                <input type="number" value={capac} onChange={e => setCapac(Number(e.target.value))} />
            </div>

            <div>
                <label>Consumo</label>
                <input type="number"  value={consumo} onChange={e => setConsumo(Number(e.target.value))} />
            </div>

            <div>
                <label>Distância</label>
                <input type="number" value={dist} onChange={e => setDist(Number(e.target.value))} />
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
    )
}
