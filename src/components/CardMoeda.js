// cSpell:Ignore CardMoeda, imagemMoeda, nomeMoeda, Atual, Cotação, cotacaoMoeda, pctMoeda, dataAtualizacao, Atualizado

import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TrendingDown from '@material-ui/icons/TrendingDown'
import TrendingUp from '@material-ui/icons/TrendingUp'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

export default function CardMoeda(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} lg={4}>
    <Paper elevation={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imagemMoeda}
          title={props.nomeMoeda}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.nomeMoeda}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Cotação Atual: {props.cotacaoMoeda}
       </Typography>
       {props.pctMoeda > 0 ?
       <Chip color="primary" label={props.pctMoeda+"%"} avatar={<TrendingUp />}/>
       :
       <Chip color="secondary" label={props.pctMoeda+"%"} avatar={<TrendingDown />}/>
       }
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography component="p">
        Atualizado em: {props.dataAtualizacao}
      </Typography>
      </CardActions>
    </Card>
    </Paper>
    </Grid>
  );
}