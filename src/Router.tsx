import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { AuthProvider } from "./components/AuthContext";
import { About } from "./pages/About";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: (
        <>
          Page not found <Link to="/">Home</Link>
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      ),
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return (
    <AuthProvider isSignedIn={false}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};
