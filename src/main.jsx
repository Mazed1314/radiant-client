import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Register from "./Pages/Register";
import AuthProvider from "./Providers/AuthProvider";
import Login from "./Pages/Login";
import HomePage from "./Pages/Home/HomePage";
import AddProduct from "./Pages/AddProduct/AddProduct";
import PrivateRoute from "./Routes/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import MyProduct from "./Pages/MyProduct/MyProduct";

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
        element: <Login></Login>,
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
        path: "/my-product",
        element: <Login></Login>,
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
