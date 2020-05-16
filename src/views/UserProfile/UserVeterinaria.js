import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink, withRouter } from 'react-router-dom';


import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import "Styles/Home.css";

import avatar from "assets/img/faces/marc.jpg";
import cardBodyStyle from "assets/jss/material-dashboard-react/components/cardBodyStyle";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div className = "imagenfondo">
      <div className="centrado">
       <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Registrate</h4>
              <p className={classes.cardCategoryWhite}>Ingresa tu datos</p>
            </CardHeader>
            <CardBody>

              
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Nombre"
                    id="nombre"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Apellido"
                    id="apellido"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Ingrese contraseña"
                    id="clave"
                    formControlProps={{
                      fullWidth: true,
                      input: 'password'
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Confirmar Contraseña"
                    id="clave"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

              <CardFooter>
              <Button color="primary">Guardar </Button>
            </CardFooter>
            </CardBody>
          </Card>
        </GridItem>
        
        
        <GridItem xs={12} sm={12} md={12}>
            <Card>

                <GridItem xs={12} sm={12} md={12}>
                    <CardHeader color="primary">
                      <h4 className={classes.cardTitleWhite}>Veterinarias</h4>
                      <p className={classes.cardCategoryWhite}>Continua con el proceso si eres una veterinaria</p>
                      </CardHeader>
                      <cardBody>

                  <GridItem xs= {12} sm= {12} md={12}>
                    <CustomInput
                     labelText="Nombre Veterinaria"
                     id="nombre_veeterinaria"
                     formControlProps={{
                       fullWidth: true
                     }}
                  />
                </GridItem>
    
              
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Nit"
                    id="nit"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Dirección"
                    id="direccion"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Teléfono"
                    id="telefono"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Nombre medico veterinario"
                    id="nombreVeterinario"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CardFooter>
                   <Button color="primary">Guardar</Button>
                 </CardFooter>
    
                </GridItem>
                </cardBody>
                </GridItem>
             </Card>
        </GridItem>
      </GridContainer>
      </div>
    </div>
  );
}