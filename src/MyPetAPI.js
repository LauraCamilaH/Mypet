// const BASE_URL = 'http://localhost:3001';
const BASE_URL = 'https://tav444fg5m.execute-api.us-east-2.amazonaws.com/default';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const MyPetAPI = {

  mascotas: {
    porPersona: (idPersona) => {
      return callApi(`/mascotas?idPersona=${idPersona}`)
      // http://backend.mypet.com/personas/1/mascotas
    },
    create: (mascota) => {
      return callApi(`/mascotas`, {
        method: 'POST',
        body: JSON.stringify(mascota),
      });
    },


  },

  usuarios: {
    create: (usuario) => {
      return callApi(`/usuarios`, {
        method: 'POST',
        body: JSON.stringify(usuario),
        });
  }
},

eventos: {
  
  porMascota: (idMascota) => {
    return callApi(`/eventos?idMascota=${idMascota}`)
  },
  
  create: (evento) => {
    return callApi(`/eventos`, {
      method: 'POST',
      body: JSON.stringify(evento),
    });
  },

    
},

};



export default MyPetAPI;
