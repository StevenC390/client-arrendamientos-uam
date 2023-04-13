/*Components > Layouts > Pages > routes*/
import { GeneralLayout } from "../layouts/GeneralLayout";
import {Admin} from "../pages/Admin/Admin";
import { SignIn } from "../pages/Admin/SignIn";
import { Home } from "../pages/General/Home";
import { Contact } from "../pages/General/Contact";
import { NotFound } from "../pages/General/NotFound";

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