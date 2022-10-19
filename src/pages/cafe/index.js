import { useState, useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router';
import './index.scss'
import { CalcularCafe } from '../../services';

export default function AlunoDoCafe() {

    const [alunos, setAlunos] = useState('');
    const [litros, setLitros] = useState('');
    const [mili, setMili] = useState('');
    
    const [total, setTotal] = useState('');

    function Cafe(){
        try {
         const resposta = CalcularCafe(alunos, litros, mili)
         setTotal(resposta);
 
        } catch (err) {
             return (err.message);
        }
     }

    

    useEffect(() =>{
        Cafe()
    }, [alunos, litros, mili])
    const navigate = useNavigate();


    return(
        <main>
            <div>
                <label>Alunos</label>
                <input type="number" value={alunos} onChange={e => setAlunos(Number(e.target.value))} />
            </div>

            <div>
                <label>Mínimo de café em litros</label>
                <input type="number" value={litros} onChange={e => setLitros(Number(e.target.value))} />
            </div>

            <div>
                <label>Consumo dos alunos em mililitros</label>
                <input type="number" value={mili} onChange={e => setMili(Number(e.target.value))} />
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