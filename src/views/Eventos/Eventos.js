import { makeStyles } from '@material-ui/core';
import GridContainer from "components/Grid/GridContainer.js";
import Primary from 'components/Typography/Primary';
import MyPetAPI from 'MyPetAPI';
import React, { useState, useEffect } from 'react';
import ListarEventos from '../../components/ListarEventos';
import styles from '../styles/Badges.css';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';

// const styles = {
// }

const useStyles = makeStyles(styles)

function Eventos(props) {
  const classes = useStyles();
  const [data, setData] = useState([])

  useEffect(() => {
    cargar();
  }, [])

  const cargar = async () => {
    let data = await MyPetAPI.eventos.porMascota(1);
    setData(data)
  }
  

  return (
      <GridContainer>
        <Card color={Primary}>
          <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Historial Medico </h4>
          </CardHeader>
          <br/>
          <div >
            <Button color="primary" 
            onClick={() => window.location.href = '/admin/historial'}
            >
             Ingresar nuevo evento
            </ Button>
            
          </div>
          <br/>
          <ListarEventos eventos={data} />
          
        </Card>
         </GridContainer>
  );
}

export default Eventos;
