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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MyPetAPI from 'MyPetAPI';


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

const state = {
  loading: false,
 // error: null,
 form: {
   nombre: '',
   tamano: '',
   fechaNacimiento: '',
   color: '',
   sexo: '',
   peso: '',
   especie: '',
   raza: '',
   senasParticulares: '',
 },
};




export default function RegistrarMascota() {

  const classes = useStyles();

  const [tamano, setTamano] = React.useState();
  const [nombre, setNombre] = React.useState();
  const [fechaNacimiento, setFechaNacimiento] = React.useState();
  const [color, setColor] = React.useState();
  const [sexo, setSexo] = React.useState();
  const [peso, setPeso] = React.useState();
  const [especie, setEspecie] = React.useState();
  const [raza, setRaza] = React.useState();
  const [senasParticulares, setSenasParticulares] = React.useState();
  const [open, setOpen] = React.useState(false);


/*   function handleClick () {

    
    console.log(nombre);
    console.log(fechaNacimiento);
    console.log(tamano);
    console.log(color);
    console.log(sexo);
    console.log(especie);
    console.log(raza);
    console.log(senasParticulares);
  }
*/
async function handleClick(e) {
    e.preventDefault();
    //this.setState({ loading: true, error: null });
    try {
      let mascota = {
        "nombre": nombre,
        "fechaNacimiento": fechaNacimiento,
        "tamano": tamano,
        "color": color,
        "peso": peso,
        "sexo": sexo,
        "senasParticulares": senasParticulares,
        "especie": especie,
        "usuarioId": 1,
        "razaId": 1
      }
      let resultado = await MyPetAPI.mascotas.create(mascota)
      setOpen(true);
      //this.setState({ loading: false });
    } catch (error) {
      console.log(error);
      //this.setState({ loading: false, error: error });
    }
   };

   const handleClose = () => {
    setOpen(false);
  };

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
                    inputProps={{
                      value: fechaNacimiento,
                      onChange: (e) => setFechaNacimiento(e.target.value)
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
                    inputProps={{
                      value: tamano,
                      onChange: (e) => setTamano(e.target.value)
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
                    inputProps={{
                      value: sexo,
                      onChange: (e) => setSexo(e.target.value)
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
                    inputProps={{
                      value: peso,
                      onChange: (e) => setPeso(e.target.value)
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
                    inputProps={{
                      value: especie,
                      onChange: (e) => setEspecie(e.target.value)
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
                    inputProps={{
                      value: raza,
                      onChange: (e) => setRaza(e.target.value)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="señas particulares"
                    id="señalesParticulares"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value:senasParticulares,
                      onChange: (e) => setSenasParticulares(e.target.value)
                    }}
                  />
                  
                </GridItem> 

              </GridContainer>

            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleClick}
              >Guardar
              
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Listo"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Se ha creado la mascota
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus
          onClick={() => window.location.href= '/admin/mascotas'}
                          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
