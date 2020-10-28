// cSpell:Ignore carregaCotacoes, setCotacoes, cotacoes, setCarregando, carregando, erro, Moeda, tipo, Comercial, Dólar, Canadense, Turismo, BRLT
// cSpell:Ignore novoshekelisraelense, yuanchines, dolaraustraliano, francosuiço, ImagemRipple, ImagemEthereum, ImagemNovoShekelisraelense, ImagemYuanChines, ImagemDolarAustraliano, ImagemFrancoSuico, ImagemLeneJapones, lenejaponês, ImagemLiteCoin, litecoin, ImagemBitCoin, dolarcanadense, ImagemDolarCanadense, ImagemPesoArgentino, dolar, ImagemDolar, ImagemEuro, imagemMoeda, Ocorre, carregar, cotacaoMoeda, dataAtualizacao, libraesterlina, pesoargentino, ImagemLibraEsterlina

import React, { useState, useEffect } from 'react'

import LinearProgress from '@material-ui/core/LinearProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Alert from '@material-ui/lab/Alert'
import ImagemDolar from './images/dolar.jpg'
import ImagemEuro from './images/euro.jpg'
import ImagemLibraEsterlina from './images/libraesterlina.jpg'
import ImagemPesoArgentino from './images/pesoargentino.jpg'
import ImagemDolarCanadense from './images/dolarcanadense.jpg'
import ImagemBitCoin from './images/bitcoin.jpg'
import ImagemLiteCoin from './images/litecoin.jpg'
import ImagemLeneJapones from './images/lenejaponês.jpg'
import ImagemFrancoSuico from './images/francosuiço.jpg'
import ImagemDolarAustraliano from './images/dolaraustraliano.jpg'
import ImagemYuanChines from './images/yuanchines.jpg'
import ImagemNovoShekelisraelense from './images/novoshekelisraelense.jpg'
import ImagemEthereum from './images/ethereum.jpg'
import ImagemRipple from './images/ripple.jpg'




import CardMoeda from './components/CardMoeda'

export default function App() {
    const [erro, setErro] = useState(null)
    const [cotacoes, setCotacoes] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        carregaCotacoes()
    }, [])

    async function carregaCotacoes() {
        setCarregando(true)
        await fetch('https://economia.awesomeapi.com.br/json/all')
            .then(res => res.json())
            .then(
                result => { setCotacoes(result) },
                error => { setErro(error) }
            )
        setCarregando(false)
    }

    return (
        <>
            {carregando && <LinearProgress variant="query" />}
            {erro && (
                <Alert severity="error">
                    Ocorre um erro ao carregar os dados: {erro.message}
                </Alert>
            )}
            <Container maxWidth="lg">
                <Grid container>
                    {cotacoes.USD &&
                        <CardMoeda
                            nomeMoeda={cotacoes.USD.name}
                            imagemMoeda={ImagemDolar}
                            cotacaoMoeda={cotacoes.USD.ask}
                            pctMoeda={cotacoes.USD.pctChange}
                            dataAtualizacao={cotacoes.USD.create_date}
                        />
                    }
                    {cotacoes.CAD &&
                        <CardMoeda
                            nomeMoeda={cotacoes.CAD.name}
                            imagemMoeda={ImagemDolarCanadense}
                            cotacaoMoeda={cotacoes.CAD.ask}
                            pctMoeda={cotacoes.CAD.pctChange}
                            dataAtualizacao={cotacoes.CAD.create_date}
                        />
                    }

                    {cotacoes.EUR &&
                        <CardMoeda
                            nomeMoeda={cotacoes.EUR.name}
                            imagemMoeda={ImagemEuro}
                            cotacaoMoeda={cotacoes.EUR.ask}
                            pctMoeda={cotacoes.EUR.pctChange}
                            dataAtualizacao={cotacoes.EUR.create_date}
                        />
                    }
                    {cotacoes.GBP &&
                        <CardMoeda
                            nomeMoeda={cotacoes.GBP.name}
                            imagemMoeda={ImagemLibraEsterlina}
                            cotacaoMoeda={cotacoes.GBP.ask}
                            pctMoeda={cotacoes.GBP.pctChange}
                            dataAtualizacao={cotacoes.GBP.create_date}
                        />
                    }
                    {cotacoes.ARS &&
                        <CardMoeda
                            nomeMoeda={cotacoes.ARS.name}
                            imagemMoeda={ImagemPesoArgentino}
                            cotacaoMoeda={cotacoes.ARS.ask}
                            pctMoeda={cotacoes.ARS.pctChange}
                            dataAtualizacao={cotacoes.ARS.create_date}
                        />
                    }
                    {cotacoes.BTC &&
                        <CardMoeda
                            nomeMoeda={cotacoes.BTC.name}
                            imagemMoeda={ImagemBitCoin}
                            cotacaoMoeda={cotacoes.BTC.ask}
                            pctMoeda={cotacoes.BTC.pctChange}
                            dataAtualizacao={cotacoes.BTC.create_date}
                        />
                    }
                    {cotacoes.LTC &&
                        <CardMoeda
                            nomeMoeda={cotacoes.LTC.name}
                            imagemMoeda={ImagemLiteCoin}
                            cotacaoMoeda={cotacoes.LTC.ask}
                            pctMoeda={cotacoes.LTC.pctChange}
                            dataAtualizacao={cotacoes.LTC.create_date}
                        />
                    }
                    {cotacoes.JPY &&
                        <CardMoeda
                            nomeMoeda={cotacoes.JPY.name}
                            imagemMoeda={ImagemLeneJapones}
                            cotacaoMoeda={cotacoes.JPY.ask}
                            pctMoeda={cotacoes.JPY.pctChange}
                            dataAtualizacao={cotacoes.JPY.create_date}
                        />
                    }

                    {cotacoes.CHF &&
                        <CardMoeda
                            nomeMoeda={cotacoes.CHF.name}
                            imagemMoeda={ImagemFrancoSuico}
                            cotacaoMoeda={cotacoes.CHF.ask}
                            pctMoeda={cotacoes.CHF.pctChange}
                            dataAtualizacao={cotacoes.CHF.create_date}
                        />
                    }
                    {cotacoes.AUD &&
                        <CardMoeda
                            nomeMoeda={cotacoes.AUD.name}
                            imagemMoeda={ImagemDolarAustraliano}
                            cotacaoMoeda={cotacoes.AUD.ask}
                            pctMoeda={cotacoes.AUD.pctChange}
                            dataAtualizacao={cotacoes.AUD.create_date}
                        />
                    }
                    {cotacoes.CNY &&
                        <CardMoeda
                            nomeMoeda={cotacoes.CNY.name}
                            imagemMoeda={ImagemYuanChines}
                            cotacaoMoeda={cotacoes.CNY.ask}
                            pctMoeda={cotacoes.CNY.pctChange}
                            dataAtualizacao={cotacoes.CNY.create_date}
                        />
                    }
                    {cotacoes.ILS &&
                        <CardMoeda
                            nomeMoeda={cotacoes.ILS.name}
                            imagemMoeda={ImagemNovoShekelisraelense}
                            cotacaoMoeda={cotacoes.ILS.ask}
                            pctMoeda={cotacoes.ILS.pctChange}
                            dataAtualizacao={cotacoes.ILS.create_date}
                        />
                    }
                    {cotacoes.ETH &&
                        <CardMoeda
                            nomeMoeda={cotacoes.ETH.name}
                            imagemMoeda={ImagemEthereum}
                            cotacaoMoeda={cotacoes.ETH.ask}
                            pctMoeda={cotacoes.ETH.pctChange}
                            dataAtualizacao={cotacoes.ETH.create_date}
                        />
                    }
                    {cotacoes.XRP &&
                        <CardMoeda
                            nomeMoeda={cotacoes.XRP.name}
                            imagemMoeda={ImagemRipple}
                            cotacaoMoeda={cotacoes.XRP.ask}
                            pctMoeda={cotacoes.XRP.pctChange}
                            dataAtualizacao={cotacoes.XRP.create_date}
                        />
                    }



                </Grid>
            </Container>
        </>
    );

}
