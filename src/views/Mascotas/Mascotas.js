import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";


import '../styles/Badges.css';
// import confLogo from '../images/badge-header.svg';
import ListarMascotas from '../../components/ListarMascotas';
// import { Grid } from '@material-ui/core';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/Card.js";
import GridContainer from "components/Grid/GridContainer.js";

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

  componentDidMount() {
    console.log('3. componentDidMount()');

    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            nombre: 'Pelusa',
            especie: 'Grady',
            email: 'Leann_Berge@gmail.com',
            color: 'Legacy Brand Director',
            tamano: 'FredaGrady22221-7573',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            nombre: 'Kitty',
            especie: 'Rodriguez',
            email: 'Ilene66@hotmail.com',
            color: 'Human Research Architect',
            tamano: 'MajorRodriguez61545',
            avatarUrl:
              'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            nombre: 'Tommy',
            especie: 'Torphy',
            email: 'Ron61@hotmail.com',
            color: 'National Markets Officer',
            tamano: 'DaphneyTorphy96105',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
        ],
      });
    }, 3000);
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
        <Card>
        <CardHeader color = "primary">
              

        <h4 >Mis mascotas</h4>
              

            </CardHeader>
          <div className = "Badges_buttons">
            <Link to="/Admin" className="btn btn-primary">
              Nueva Mascota
            </Link> 
          </div>
          <ListarMascotas mascotas={this.state.data} />
         </Card>
         
        </GridContainer>
      </React.Fragment>
    );
  }
}

export default Mascotas;
