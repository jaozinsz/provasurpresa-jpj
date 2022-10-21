import { useEffect, useState } from 'react'
import './index.scss'
import { JurosCompostos } from '../../services/index.js'

export default function Juros() {
    const [entrada, setEntrada] = useState(0)
    const [valor, setValor] = useState(0)
    const [taxa, setTaxa] = useState(0)
    const [periodo, setPeriodo] = useState(0)
    const [resultado, setResultado] = useState([])


    function CalcularJuros() {
        try {
            let resposta = JurosCompostos(entrada, valor, taxa, periodo)
            console.log(resposta)
            setResultado(resposta)
        }
        catch (err) {
            setResultado(err.message)
        }
    }

    return (
        <main className='sim'>
            <h1> Juros compostos </h1>

            <div>
                Insira sua entrada <input type='number' min={0} value={entrada} onChange={e => setEntrada(e.target.value)} />
            </div>

            <div>
                Insira o valor do empreendimento <input type='number' min={0} value={valor} onChange={e => setValor(e.target.value)} />
            </div>

            <div>
                Insira a taxa anual <input type='number' min={0} value={taxa} onChange={e => setTaxa(e.target.value)} />
            </div>

            <div>
                Insira o periodo de pagamento <input type='number' min={0} value={periodo} onChange={e => setPeriodo(e.target.value)} />
            </div>
            <div>
                <button onClick={CalcularJuros}>Calcular</button>
            </div>
            {resultado.map(item =>
                <div>
                    {item}
                </div>

            )}
        </main>
    )
}