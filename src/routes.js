/*!

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Icons from "views/Icons/Icons.js";
//import Icons from "views/Icons/RegistrarMascota.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import UserProfile from "views/UserProfile/UserProfile.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "My Pet inicio",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Mis mascotas",
    icon: "favorite",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Historia Clinica",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Registrar mascotas",
    icon: "library_books",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Registrar 2 mascotas",
    icon: "library_books",
    component: Icons,
    layout: "/admin"
  },
];

export default dashboardRoutes;
