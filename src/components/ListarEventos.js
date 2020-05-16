import React from 'react';

import './styles/ListarMascotas.css';
import { card } from 'assets/jss/material-dashboard-react';
import GridContainer from './Grid/GridContainer';
import Card from './Grid/GridContainer';
import { Button } from '@material-ui/core';


class ListarEventosItem extends React.Component {

  verDetalle = () => {
    console.log(this.props.badge)
  }

  render() {
    return (
      <div className="BadgesListItem">
        <strong>
            Evento:  {this.props.badge.nombre}  </strong>
          
        {/* <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatar}
        // alt={`${this.props.badge.nombre} ${this.props.badge.especie}`}
        /> */}

        <div onClick={this.verDetalle}>
          {/* <strong>
            Evento:  {this.props.badge.nombre}  </strong> */}
          <strong><br/> Fecha:</strong>  {this.props.badge.fecha}
          <strong><br />Observaciones:</strong> {this.props.badge.observaciones}
          <strong><br />Medico veterinario: </strong>{this.props.badge.nombreVeterinario}
          <br /> Medicacion : {this.props.badge.medicacion}
          <br /> Sintomas : {this.props.badge.sintomas}
          <br /> Diagnostico : {this.props.badge.diagnostico}
        </div>

      </div>

    );
  }
}

class ListarEventos extends React.Component {

  render() {
    return (
      <div className="BadgesList">
        <div className="list-unstyled">
          {this.props.eventos.map(badge => {
            return (

              <div key={badge.id} >
                <br />
                <ListarEventosItem badge={badge} />

                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListarEventos;