import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Register from "./Pages/Register";
import AuthProvider from "./Providers/AuthProvider";
import Login from "./Pages/Login";
import HomePage from "./Pages/Home/HomePage";
import PrivateRoute from "./Routes/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/Profile/EditProfile";
import EditProduct from "./Pages/Product/EditProduct";
import ProductDetails from "./Pages/Product/ProductDetails";
import MyProduct from "./Pages/Product/MyProduct";
import AddProduct from "./Pages/Product/AddProduct";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "profile/edit-user/:id",
        element: <EditProfile></EditProfile>,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-product",
        element: (
          <PrivateRoute>
            <MyProduct></MyProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/view-details/:_id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("https://radiant-server-opal.vercel.app/products"),
      },

      {
        path: "/edit-product/:id",
        element: (
          <PrivateRoute>
            <EditProduct></EditProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://radiant-server-opal.vercel.app/product/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
