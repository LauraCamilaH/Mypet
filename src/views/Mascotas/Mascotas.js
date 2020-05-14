import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { default as Card, default as CardHeader } from "components/Card/Card.js";
import GridContainer from "components/Grid/GridContainer.js";
import Primary from 'components/Typography/Primary';
import MyPetAPI from 'MyPetAPI';
import React from 'react';
import ListarMascotas from '../../components/ListarMascotas';
import '../styles/Badges.css';



const styles = theme => ({
});

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
    this.setState({ data: data })
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
    return (
      <React.Fragment>
        <GridContainer>
          <Card color={Primary}>
            <CardHeader color="primary">
              <h2>Mis Mascotas</h2>
            </CardHeader>
            <div className="Badges_buttons">
              <Button color="primary"
                onClick={() => window.location.href = '/admin/RegistroMascotas'}
              >
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

Mascotas.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Mascotas);
