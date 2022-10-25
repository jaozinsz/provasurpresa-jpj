import { useState, useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router';
import './index.scss'
import { CalcularAlunos } from '../../services';

export default function MediaAluno() {

    const [alunos, setAlunos] = useState([]);
    const [media, setMedia] = useState([]);

    const [total, setTotal] = useState('')

    function CalcularAlunoss() {
        try {
            const resposta = CalcularAlunos(alunos);
            setTotal(resposta);
    
        } catch (err) {
            return (err.message);
        }
    }

    // useEffect(() =>{
      //  CalcularAlunoss()
    //}, [alunos])
    const navigate = useNavigate();

    return (
        <main>
            <h1>Calcular Paradas de Abastecimento</h1>

            <div>
                <label> Qtd Alunos </label>
                <input type="number" value={alunos} onChange={e => setAlunos(e.target.value)} />
                <button onClick={CalcularAlunoss}>ok</button>
            </div>

            <div>
                {alunos.map(item =>{
                    return <input value={item[media]} onChange={e => setMedia(e.target.value)}/>
                })}
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
