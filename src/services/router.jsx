import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "../App"
const Home = lazy(() => import("../pages/home/Home"))
const About = lazy(() => import("../pages/about/About"))
const Contact = lazy(() => import("../pages/contact/Contact"))
const Error = lazy(() => import("../pages/error/Error"))
const Posts = lazy(() => import("../pages/posts/Posts"))
const Post = lazy(() => import("../pages/posts/Post"))

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