// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import AccessTime from "@material-ui/icons/AccessTime";
import oferta1 from "assets/img/ofertas/1.png";
import oferta2 from "assets/img/ofertas/2.png";
import oferta3 from "assets/img/ofertas/3.jpg";
import oferta4 from "assets/img/ofertas/4.png";
import oferta5 from "assets/img/ofertas/5.jpg";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import GridContainer from "components/Grid/GridContainer.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import React from "react";







const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
              <CardAvatar profile >
              <a href="#oferta1" onClick={e => e.preventDefault()}>
                <img src={oferta1} alt="..." />
              </a>
            </CardAvatar>
            <CardBody>
              <h4 className={classes.cardTitle}>Descuento</h4>
              <p className={classes.cardCategory}> prueba para git55% descuento en peluqueria 
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> oferta valida hasta el 30 
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
          <CardAvatar profile >
              <a href="#oferta1" onClick={e => e.preventDefault()}>
                <img src={oferta2} alt="..." />
              </a>
            </CardAvatar>
            <CardBody>
              <h4 className={classes.cardTitle}>2x1</h4>
              <p className={classes.cardCategory}>En todas las comida para perros </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> valida hasta agotar existencias 
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
          <CardAvatar profile >
              <a href="#oferta3" onClick={e => e.preventDefault()}>
                <img src={oferta3} alt="..." />
              </a>
            </CardAvatar>
            <CardBody>
              <h4 className={classes.cardTitle}>Desparacitación </h4>
              <p className={classes.cardCategory}>Promocion en desparacitacion para tus mascotas </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Hasta el 02 de agosto
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
              <CardAvatar profile >
              <a href="#oferta4" onClick={e => e.preventDefault()}>
                <img src={oferta4} alt="..." />
              </a>
            </CardAvatar>
            <CardBody>
              <h4 className={classes.cardTitle}>Descuento</h4>
              <p className={classes.cardCategory}> 55% descuento en peluqueria 
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> oferta valida hasta el 30 
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
          <CardAvatar profile >
              <a href="#oferta5" onClick={e => e.preventDefault()}>
                <img src={oferta5} alt="..." />
              </a>
            </CardAvatar>
            <CardBody>
              <h4 className={classes.cardTitle}>2x1</h4>
              <p className={classes.cardCategory}>En todas las vacunas para tus mascotas</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> valida hasta agotar existencias 
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
          <CardAvatar profile >
              <a href="#oferta6" onClick={e => e.preventDefault()}>
                <img src={oferta2} alt="..." />
              </a>
            </CardAvatar>
            <CardBody>
              <h4 className={classes.cardTitle}>Gratis </h4>
              <p className={classes.cardCategory}>120 gr por la compra </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Hasta el 02 de agosto
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  );
}
