import About from "../pages/About/About"
import Department from "../pages/Departments/Departments"
import Donation from "../pages/Donation/Donation"
import Gallery from "../pages/Gallery/Gallery"
import Home from "../pages/Home/Home"

const publicRoutes = [
    {path: "/", name: "Blogs", Componant: Home},
    {path: "/about", name: "About", Componant: About},
    {path: "/department", name: "Department", Componant: Department},
    {path: "/gallery", name: "Gallery", Componant: Gallery},
    {path: "/donation", name: "Donation", Componant: Donation},
]

export default publicRoutes;