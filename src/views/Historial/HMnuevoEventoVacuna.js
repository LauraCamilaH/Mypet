import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Hidden from "@material-ui/core/Hidden";
import Person from "@material-ui/icons/LibraryAdd";



import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Divider from "@material-ui/core/Divider";


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

export default function HMnuevoEventoVacuna() 

{
  const classes = useStyles();

  const [openProfile, setOpenProfile] = React.useState(null);
  
  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };
  return (
    <div>
      
      <GridContainer>
      <Button
          color={"primary"}
          justIcon={window.innerWidth > 959}
          className={classes.buttonLink}
        >
          <Person className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>Tipo de evento</p>
          </Hidden>
        </Button>
        <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.dropdownItem}
                    >
                      vacuna
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.dropdownItem}
                    >
                      Desparacitación
                    </MenuItem>
                    <Divider light />
                   
                  </MenuList>
                </ClickAwayListener>
              </Paper>

        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Vacunas</h4>
              <p className={classes.cardCategoryWhite}>Ingresa los datos basicos de la vacuna de tu mascota aqui</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                 
                       <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                      labelText="fecha de la vacuna "
                      id="fechaEvento"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Nombre de la vacuna"
                      id="nombreEvento"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Observaciones"
                      id="observacionesEvento"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Nombre del veterinario"
                      id="nombreVeterinarioEvento"
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