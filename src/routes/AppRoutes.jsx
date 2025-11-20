import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Service from "../pages/Services/Service";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blogs/Blog";
import BlogDetails from "../components/blogPageComponents/BlogDetails";
import QuickBooksMain from "../components/quickBooks/quickBooksHome/QuickBooksMain";
import QuickBooksDesktop from "../components/quickBooks/quickBooksDesktop/QuickBooksDesktop";
import VigiloraxHero from "../components/VigiloraxComponents/VigiloraxHero";




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
            {
                path: "blog",
                element: <Blog/>
            },
            {
                path: "blog/121",
                element: <BlogDetails/>
            },
            {
                path: "quick-books",
                element: <QuickBooksMain/>
            },
            {
                path: "quick-books/desktop",
                element: <QuickBooksDesktop/>
            },
            {
                path: "quick-books/enterprise",
                element: <QuickBooksDesktop />
            },
            {
                path: "quick-books/accountant",
                element: <QuickBooksDesktop />
            },
            {
                path: "quick-books/point-of-scale",
                element: <QuickBooksDesktop />
            },
            {
                path: "quick-books/payroll",
                element: <QuickBooksDesktop />
            },
            {
                path: "quick-books/self-employed",
                element: <QuickBooksDesktop />
            },
            {
                path: "quick-books/cloud-hosting",
                element: <QuickBooksDesktop />
            },
            {
                path: "Vigilorax",
                element: <VigiloraxHero/>
            },
            
        ]
    }
])


export default AppRoutes;