// cSpell:Ignore carregaCotacoes, setCotacoes, cotacoes, setCarregando, carregando, erro, Moeda, tipo, Comercial, Dólar, Canadense, Turismo, BRLT

import React, { useState, useEffect } from 'react'

import Moeda from '../src/components/Moeda'

export default function App() {
    const [erro, setErro] = useState(null)
    const [cotacoes, setCotacoes] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        carregaCotacoes()
    }, [])

    async function carregaCotacoes() {
        setCarregando(true)
        await fetch('https://economia.awesomeapi.com.br/all/USD-BRL')
            .then(res => res.json())
            .then(
                result => { setCotacoes(result) },
                error => { setErro(error) }
            )
        setCarregando(false)
    }

    return ( 
        <div> 
            { carregando && <p> Carregando... </p> }
            
            <Moeda
                tipo = "USD" 
                code = "USD"
                codein = "BRL"
                name = "Dólar Comercial"
                high = "5.6344"
                low = "5.5655"
                varBid = "0.0291"
                pctChange = "0.52"
                bid = "5.617"
                ask = "5.6199"
                timestamp = "1603486796"
                create_date = "2020-10-23 21:00:02"
            />

            <Moeda
                tipo = "USDT" 
                code = "USD"
                codein = "BRLT"
                name = "Dólar Turismo"
                high = "5.775"
                low = "5.705"
                varBid = "0.03"
                pctChange = "0.52"
                bid = "5.6"
                ask = "5.94"
                timestamp = "1603481280"
                create_date = "2020-10-23 21:00:05"
            />

            <Moeda
                tipo = "CAD" 
                code = "CAD"
                codein = "BRL"
                name = "Dólar Canadense"
                high = "4.2877"
                low = "4.2408"
                varBid = "0.0243"
                pctChange = "0.57"
                bid = "4.279"
                ask = "4.2817"
                timestamp = "1603486798"
                create_date = "2020-10-23 21:00:02"
            />
            
        </div>
    )

}