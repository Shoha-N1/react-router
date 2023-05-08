import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import App from "../App"
import Error from "../pages/error/Error";
import Posts from "../pages/posts/Posts";
import Post from "../pages/posts/Post";

const router = createBrowserRouter([
   {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
        {
            path: "/",
            index: true,
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/posts",
            element: <Posts />,
        },
        {
            path: "/posts/:id",
            element: <Post />,
        },
    ]
   }
])

export default router