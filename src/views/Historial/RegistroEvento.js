import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import MyPetAPI from 'MyPetAPI';
import React from "react";





//import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";


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
    fecha: '',
    observaciones: '',
    nombreVeterinario: '',
    medicacion: '',
    sintomas: '',
    diagnostico: '',
  },
};

export default function HMnuevoEventoVacuna() {

  const [fecha, setFecha] = React.useState();
  // const [name, setName] = React.useState();
  const [observaciones, setObservaciones] = React.useState();
  const [nombreVeterinario, setNombreVeterinario] = React.useState();
  const [medicacion, setMedicacion] = React.useState();
  const [sintomas, setSintomas] = React.useState();
  const [diagnostico, setDiagnostico] = React.useState();
  const [open, setOpen] = React.useState(false);

  const [state, setState] = React.useState({
    age: '',
    name: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const classes = useStyles();

  const [openProfile, setOpenProfile] = React.useState(null);

  // const handleClickProfile = event => {
  //   if (openProfile && openProfile.contains(event.target)) {
  //     setOpenProfile(null);
  //   } else {
  //     setOpenProfile(event.currentTarget);
  //   }
  // };
  // const handleCloseProfile = () => {
  //   setOpenProfile(null);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    console.log(e)
  }

  async function handleClick(e) {
    e.preventDefault();
    //this.setState({ loading: true, error: null });
    try {
      let evento = {

        "fecha": fecha,
        "observaciones": observaciones,
        "nombreVeterinario": nombreVeterinario,
        "medicacion": medicacion,
        "sintomas": sintomas,
        "diagnostico": diagnostico,
        "teventoId": 1,
        "MascotaId": 1
      }
      let resultado = await MyPetAPI.eventos.create(evento)
      setOpen(true);
      //this.setState({ loading: false });
    } catch (error) {
      console.log(error);
      //this.setState({ loading: false, error: error });
    }
  };

  return (
    <div>

      <GridContainer>


        <GridItem xs={12} sm={12} md={12}>

          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Ingresa el historial medico veterinario</h4>
              <p className={classes.cardCategoryWhite}>Cada vez que quieras, puedes registar la consulta
               o la visita que realizaste al veterinario con tu mascota, eligiendo el tipo de visita.  Si no tienes todos los datos, puedes registrar solo los mas importantes!!</p>

            </CardHeader>
            <CardBody>
              <InputLabel htmlFor="age-native-simple">Tipo de visita </InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                  name: 'age',
                  id: 'age-native-simple',
                  // value: name,
                  // onChange: (e) => setName(e.target.value)
                }}
              >
                <option aria-label="None" value="" />
                <option value={1}>Vacuna</option>
                <option value={2}>Consulta</option>
                <option value={3}>Desparacitación </option>
                <option value={4}>Cirugía </option>
                <option value={5}>Enfermedad </option>
                <option value={6}>Peluqueria </option>
              </Select>
              <GridContainer>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="fecha"
                    id="fecha"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: fecha,
                      onChange: (e) => setFecha(e.target.value)
                    }}
                  />
                </GridItem>



                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Observaciones"
                    id="observaciones"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      value: observaciones,
                      onChange: (e) => setObservaciones(e.target.value)
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Nombre del veterinario"
                    id="nombreVeterinario"
                    onChange={onChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: nombreVeterinario,
                      onChange: (e) => setNombreVeterinario(e.target.value)
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Medicamentos"
                    id="medicacion"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: medicacion,
                      onChange: (e) => setMedicacion(e.target.value)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Sintomas presentados"
                    id="sintomas"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: sintomas,
                      onChange: (e) => setSintomas(e.target.value)
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Diagnostico"
                    id="diagnostico"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: diagnostico,
                      onChange: (e) => setDiagnostico(e.target.value)
                    }}
                  />
                </GridItem>

              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleClick} >Guardar</Button>
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
            Registro exitoso
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus
            onClick={() => window.location.href = '/admin/mascotas'}
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}