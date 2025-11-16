import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Service from "../pages/Services/Service";
import Contact from "../pages/Contact/Contact";




const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "service",
                element: <Service/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            
        ]
    }
])


export default AppRoutes;