import { makeStyles } from '@material-ui/core';
import GridContainer from "components/Grid/GridContainer.js";
import Primary from 'components/Typography/Primary';
import MyPetAPI from 'MyPetAPI';
import React, { useState, useEffect } from 'react';
import ListarMascotas from '../../components/ListarMascotas';
import styles from '../styles/Badges.css';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';

// const styles = {
// }

const useStyles = makeStyles(styles)

function Mascotas(props) {
  const classes = useStyles();
  const [data, setData] = useState([])

  useEffect(() => {
    cargar();
  }, [])

  const cargar = async () => {
    let data = await MyPetAPI.mascotas.porPersona(1);
    setData(data)
  }
  return (
      <GridContainer>
        <Card color={Primary}>
          <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Mis Mascotas </h4>
          </CardHeader>
          <br/>
          <div >
            <Button color="primary" 
              onClick={() => window.location.href = '/admin/RegistroMascotas'}
            >
             registar nueva Mascota
            </ Button>
            
          </div>
          <br/>
          <ListarMascotas mascotas={data} />
          
        </Card>
         </GridContainer>
  );
}

export default Mascotas;
