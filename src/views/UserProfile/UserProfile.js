import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
import "Styles/Home.css";




  

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


  const [apellido, setApellido] = React.useState();
  const [nombre, setNombre] = React.useState();
  const [email, setEmail] = React.useState();
  const [contrasena, setContrasena] = React.useState();
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  async function handleClick(e) {
    e.preventDefault();
    //this.setState({ loading: true, error: null });
    try {
      let usuario = {
        "nombres": nombre,
        "apellidos": apellido,
        "email": email,
        "contrasena": contrasena
      }
      let resultado = await MyPetAPI.usuarios.create(usuario)
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
    <body className = "imagenfondo">
      <div className= "centrado">
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
                      fullWidth: true,
                       onChange: (e) => setNombre(e.target.value)
                    
                    }}
                  />
                </GridItem>
                {/* <GridItem xs={12} sm={12} md={12}> */}
                  <CustomInput
                    labelText="Apellido"
                    id="apellido"
                    formControlProps={{
                      fullWidth: true,
                      onChange: (e) => setApellido(e.target.value)
                    }}
                  />
                {/* </GridItem> */}

                {/* <GridItem xs={12} sm={12} md={12}> */}
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                      onChange: (e) => setEmail(e.target.value)
                    }}
                  />
                {/* </GridItem> */}

                {/* <GridItem xs={12} sm={12} md={12}> */}
                  <CustomInput
                    labelText="Ingrese contraseña"
                    id="clave"
                    formControlProps={{
                      fullWidth: true,
                      input: 'password',
                      
                    }}
                  />
                {/* </GridItem> */}

                {/* <GridItem xs={12} sm={12} md={12}> */}
                  <CustomInput
                    labelText="Confirmar Contraseña"
                    id="clave"
                    formControlProps={{
                      fullWidth: true,
                      onChange: (e) => setContrasena(e.target.value)
                    }}
                  />
                {/* </GridItem> */}

              <CardFooter>
              <Button color="primary" onClick={handleClick}> Registrarse </Button>
            </CardFooter>
            </CardBody>
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
            Se ha creado un nuevo usuario
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus   
          onClick={() => window.location.href= '/admin'}
>
            Aceptar
            {/* <Link
                  component={RouterLink}
                  to="/admin"
                  variant="h6"
                >
                  </Link> */}
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    </body>
  );
}
