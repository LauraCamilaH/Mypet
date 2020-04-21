/*!

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Inicio/Dashboard.js";

import RegistrarMascota from "views/RegistroMascotas/RegistrarMascota.js";
import TableList from "views/MisMascotas/TableList.js";

import UserProfile from "views/UserProfile/UserProfile.js";
import HMnuevoEventoVacuna from "views/Historial/HMnuevoEventoVacuna";

const dashboardRoutes = [
  { 
    path: "/Inicio",
    name: "My Pet inicio",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Usuario",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/MisMascotas",
    name: "Mis mascotas",
    icon: "favorite",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/historial",
    name: "Historia Clinica de mis mascotas",
    icon: 'local_hospital',
    component: HMnuevoEventoVacuna,
    layout: "/admin"
  },
  {
    path: "/RegistroMascotas",
    name: "Registrar mascotas",
    icon: 'library_books',
    component: RegistrarMascota,
    layout: "/admin"
  },
  // {
  //   path: "/icons2",
  //   name: "Registrar 2 mascotas",
  //   icon: "library_books",
  //   component: Icons,
  //   layout: "/admin"
  // },
];

export default dashboardRoutes;
