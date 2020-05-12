import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import '../styles/Badges.css';
// import confLogo from '../images/badge-header.svg';
import ListarMascotas from '../../components/ListarMascotas';
//import { Grid } from '@material-ui/core';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/Card.js";
import GridContainer from "components/Grid/GridContainer.js";
import MyPetAPI from 'MyPetAPI';

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import Primary from 'components/Typography/Primary';
import buttonStyle from 'assets/jss/material-dashboard-react/components/buttonStyle';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(styles);


// const styles = {
//   cardCategoryWhite: {
//     color: "rgba(255,255,255,.62)",
//     margin: "0",
//     fontSize: "14px",
//     marginTop: "0",
//     marginBottom: "0"
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none"
//   }
// };

// const styles = makeStyles(styles);

// const classes = useStyles();

class Mascotas extends React.Component {
  
  constructor(props) {
    super(props);
    console.log('1. constructor()');

    this.state = {
      data: [],
    };
  }

  cargar = async () => {
    let data = await MyPetAPI.mascotas.porPersona(1);    
    
    this.setState({data: data})
  }

  componentDidMount() {
    console.log('3. componentDidMount()');
    this.cargar();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log('6. componentWillUnmount');
    clearTimeout(this.timeoutId);
  }

  

  render() {
    // const classes = useStyles();
    return (

      <React.Fragment>
        <GridContainer>
        <Card color = {Primary}>
        <CardHeader color = "primary">
              

        <h2>Mis Mascotas</h2>
              

            </CardHeader>
          <div className = "Badges_buttons">
            <Button  color = "primary" >
              Nueva Mascota
            </ Button> 
          </div>
          <ListarMascotas mascotas={this.state.data} />
         </Card>
         
        </GridContainer>
      </React.Fragment>
    );
  }
}

export default Mascotas;
