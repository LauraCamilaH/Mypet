import React from 'react';
import './styles/ListarMascotas.css';



class ListarMascotasItem extends React.Component {

  verDetalle = () => {
    console.log(this.props.badge)
  }

  render() {
    return (
      <div className="BadgesListItem">
        <br />
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatar}
        // alt={`${this.props.badge.nombre} ${this.props.badge.especie}`}
        />
        <div onClick={this.verDetalle}>
          <strong>
            Nombre:  {this.props.badge.nombre} Especie:  {this.props.badge.especie}
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
                <br />
                <ListarMascotasItem badge={badge} />

                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListarMascotas;
