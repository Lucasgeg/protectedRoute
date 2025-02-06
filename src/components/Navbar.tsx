import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export const Navbar = () => {
  const { isConnected, logOut } = useAuthContext();
  return (
    <>
      <nav>
        <NavLink to="/">Home (public)</NavLink>
        <NavLink to="/profile">Profile (private)</NavLink>
        <NavLink to="/about">About (public)</NavLink>
      </nav>
      {isConnected && (
        <button
          onClick={() => logOut()}
          style={{ position: "absolute", top: 15, right: 15 }}
        >
          Disconnect
        </button>
      )}
    </>
  );
};
