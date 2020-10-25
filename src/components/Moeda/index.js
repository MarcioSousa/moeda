// cSpell:Ignore carregaCotacoes, setCotacoes, cotacoes, setCarregando, carregando, erro, Moeda, tipo

import React from 'react'

export default function Moeda(props) {

    return ( <>
        <p> Dados da Moeda </p>   
        <p> {props.code} </p>
        <p> { props.codein } </p> 
        <p> { props.high } </p> 
        <p> { props.low } </p> 
        <p> { props.varBid } </p> 
        <p> { props.pctChange } </p> 
        <p> { props.bid } </p> 
        <p> { props.ask } </p> 
        <p> { props.timestamp } </p> 
        <p> { props.create_date } </p> 
        </>
    )
}