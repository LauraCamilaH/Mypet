import React from 'react';

import './styles/ListarMascotas.css';
import { card } from 'assets/jss/material-dashboard-react';
import GridContainer from './Grid/GridContainer';
import Card from './Grid/GridContainer';

class ListarMascotasItem extends React.Component {
  render() {
    return (
      <div className = "BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatar}
          alt={`${this.props.badge.nombre} ${this.props.badge.especie}`}
        />

        <div>
          <strong>
            {this.props.badge.nombre} {this.props.badge.especie}
          </strong>
          <br />tamano: {this.props.badge.tamano}
        
          <br />Raza: {this.props.badge.raza}
          <br />
          color: {this.props.badge.color}
        </div>
      </div>
    );
  }
}

class ListarMascotas extends React.Component {
  
  render() {
    return (
      <div className="BadgesList">
        <div className="list-unstyled">
          {this.props.mascotas.map(badge => {
            return (
              
              <div key={badge.id} >
                <ListarMascotasItem badge={badge} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListarMascotas;
