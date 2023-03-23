/*Components > Layouts > Pages > routes*/
import { GeneralLayout } from "../layouts/GeneralLayout";
import Admin from "../pages/admin/Admin";
import { SignIn } from "../pages/Admin/SignIn";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

const AdminRoutes = [
    {path:"./admin",component:Admin,Layout:GeneralLayout},
    {path:"./admin",component:SignIn,Layout:GeneralLayout}
];

const GeneralRoutes = [
    {path:"/",component:Contact,Layout:GeneralLayout},
    {path:"/",component:Home,Layout:GeneralLayout},
    {path:"/",component:NotFound,Layout:GeneralLayout}
];

const allRoutesProject = [...AdminRoutes,...GeneralRoutes];
export default allRoutesProject;