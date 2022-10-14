import { useState, useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router';
import './index.scss'
import { Temperatura } from '../../services';

export default function Febre() {

    const [temp, setTemp] = useState('');
    const [total, setTotal] = useState('');

    function temperatura(){
        try {
         const resposta = Temperatura(temp)
         setTotal(resposta);
 
        } catch (err) {
             return (err.message);
        }
     }

    

    useEffect(() =>{
        temperatura()
    }, [temp])
    const navigate = useNavigate();


    return(
        <main>
            <div>
                <label>temperatura</label>
                <input type="number" value={temp} onChange={e => setTemp(Number(e.target.value))} />
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