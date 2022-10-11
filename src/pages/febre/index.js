import { useState, useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router';
import './index.scss'

export default function Febre() {

    

    const [temp, setTemp] = useState('');
    const [total, setTotal] = useState('')

    function temperatura () {
        try {
            let msg = ''
            if (temp >= 41) {
                msg = 'Hipertemia'
            }

            else if (temp >= 39.6 && temp < 41) {
                msg = 'Febre alta'
            }

            else if (temp >= 37.5 && temp < 39.6) {
                msg = 'Febre'
            }

            else if (temp >= 36 && temp < 37.5) {
                msg = 'Normal'
            }

            else{
                msg = 'Hipotermia'
            }

            setTotal(msg)

            
        } catch (err) {
            
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