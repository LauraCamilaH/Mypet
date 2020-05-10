import React, { useRef } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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

import avatar from "assets/img/faces/avatar.jpg";

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


// handleSubmit = (e)=>{
//         e.preventDefault()
//         console.log(' from was submitted');
//         console.log(this.state);
//     }



export default function RegistrarMascota() {
  const classes = useStyles();
  const [nombre, setNombre] = React.useState();
  const [color, setColor] = React.useState();
  
  function handleClick(){
    console.log(nombre);
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Registra a tu mascota </h4>
              <p className={classes.cardCategoryWhite}>Ingresa los datos de tu mascota a My Pet, para que puedes llevar el historial medico veterinario</p>
            </CardHeader>
            <CardBody>
              <br></br>
              <br></br>
              <CardAvatar profile>
                <a href="#" onClick={e => e.preventDefault()}>
                  <img src={avatar} />
                </a>
              </CardAvatar>
              <GridContainer >
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Nombre de tu mascota"
                    id="nombreMascota"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: nombre,
                      onChange: (e) => setNombre(e.target.value)
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
                    inputProps={{
                      value: color,
                      onChange: (e) => setColor(e.target.value)
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
              <Button color="primary" onClick={handleClick}>Guardar</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
