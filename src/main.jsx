import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Components/Layout/Layout";

import Error from "./Components/ERROR/Error";
import Signup from "./Components/Login/Signup/Signup";
import Login from "./Components/Login/Login/Login";
import AuthProvider from "./Components/Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Components/Home/Home";
import Instructors from "./Components/Instructor/Instructors";


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      // {
      //   path: "detail/:id",
      //   element: <Detailpage />,
      //   loader: ({ params }) =>
      //     fetch(`https://kiddo-back-end-joysd1010.vercel.app/toys/${params.id}`),
      // },
      // {
      //   path: "/cart",
      //   element: <Privateroute><Mycart /></Privateroute>,
      // },
      {
        path: "/instruct",
        element: <Instructors />,
      },

      // { path: "/alltoy", element: <AllToy /> },
      // { path: "/contact", element: <ContactUS /> },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
