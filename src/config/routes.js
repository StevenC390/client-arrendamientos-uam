/*Components > Layouts > Pages > routes*/
import { GeneralLayout } from "../layouts/GeneralLayout";
import Admin from "../pages/admin";
import { SignIn } from "../pages/admin/SignIn";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

const AdminRoutes = [
    {path:"/admin",component:Admin,Layout:GeneralLayout},
    {path:"/admin/sign-in",component:SignIn,Layout:GeneralLayout},
];

const GeneralRoutes = [
    {path:"/",component:Home,Layout:GeneralLayout},
    {path:"/contact",component:Contact,Layout:GeneralLayout},
    {path:"*",component:NotFound,Layout:GeneralLayout},
];

const allRoutesProject = [...AdminRoutes,...GeneralRoutes];
export default allRoutesProject;