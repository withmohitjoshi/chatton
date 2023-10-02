import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ForgetPassword, HomePage, LoginPage, SignupPage } from "../Pages"

// layouts
const PublicLayout = lazy(() => import("../layouts/PublicLayout"));
const ProtectedLayout = lazy(() => import("../layouts/ProtectedLayout"));

// routes
const PublicRoute = lazy(() => import("./PublicRoute"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicLayout>
        <PublicRoute />
      </PublicLayout>
    ),
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedLayout>
        <ProtectedRoute />
      </ProtectedLayout>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
