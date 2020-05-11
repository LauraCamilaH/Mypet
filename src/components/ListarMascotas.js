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
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.nombre} ${this.props.badge.especie}`}
        />

        <div>
          <strong>
            {this.props.badge.nombre} {this.props.badge.especie}
          </strong>
          <br />@{this.props.badge.tamano}
          <br />
          {this.props.badge.color}
        </div>
      </div>
    );
  }
}

class ListarMascotas extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.mascotas.map(badge => {
            return (
              
              <li key={badge.id}>
                <ListarMascotasItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListarMascotas;
