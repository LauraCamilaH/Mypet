import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "./node_modules/components/Grid/GridItem.js.js";
import GridContainer from "./node_modules/components/Grid/GridContainer.js.js";
import CustomInput from "./node_modules/components/CustomInput/CustomInput.js.js";
import Button from "./node_modules/components/CustomButtons/Button.js.js";
import Card from "./node_modules/components/Card/Card.js.js";
import CardHeader from "./node_modules/components/Card/CardHeader.js.js";
import CardAvatar from "./node_modules/components/Card/CardAvatar.js.js";
import CardBody from "./node_modules/components/Card/CardBody.js.js";
import CardFooter from "./node_modules/components/Card/CardFooter.js.js";

import avatar from "./node_modules/assets/img/faces/avatar2.jpg";

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

export default function eventoVacuna() {
  const classes = useStyles();
  return (
    <div>

      <GridContainer>

      <ul id="dropdown2" class="dropdown-content">
    <li><a href="#!">one<span class="badge">1</span></a></li>
    <li><a href="#!">two<span class="new badge">1</span></a></li>
    <li><a href="#!">three</a></li>
  </ul>
  <a class="btn dropdown-trigger" href="#!" 
  data-target="dropdown2">Dropdown<i class="material-icons right">arrow_drop_down</i></a>
        
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Registra a tu mascota </h4>
              <p className={classes.cardCategoryWhite}>Ingresa los datos de tu mascota a My Pet</p>
            </CardHeader>
            <CardBody>
                <br></br>
                <br></br>
            <CardAvatar profile>
              <a href="#" onClick={e => e.preventDefault()}>
                <img src={avatar} />
              </a>
            </CardAvatar>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Nombre de tu mascota"
                    id="nombreMascota"
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="fecha de nacimiento"
                    id="fechaNacimiento"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Tamaño de tu mascota"
                    id="tamano"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Color de tu mascota" 
                    id="color"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="sexo"
                    id="sexo"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="peso"
                    id="peso"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="especie"
                    id="especie"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="raza"
                    id="raza"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
            
                  <CustomInput
                     labelText="señas particulares"
                     id="señales particulaes"
                     formControlProps={{
                       fullWidth: true
                     }}
                  />
                </GridItem>

              </GridContainer>

            </CardBody>
            <CardFooter>
              <Button color="primary">Guardar</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
