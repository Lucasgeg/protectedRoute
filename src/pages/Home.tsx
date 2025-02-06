import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export type UserData = {
  email: string;
  password: string;
};

export const Home = () => {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
  });
  const { isConnected, signIn } = useAuthContext();
  const navigate = useNavigate();
  console.log(isConnected);

  useEffect(() => {
    if (isConnected) {
      navigate("/profile");
    }
  }, [isConnected, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn(userData);
  };

  return (
    <>
      <Navbar />
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Please enter your email
          <input
            type="text"
            placeholder="your email"
            value={userData.email}
            onChange={(e) =>
              setUserData({
                email: e.target.value,
                password: userData.password,
              })
            }
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({
                email: userData.email,
                password: e.target.value,
              })
            }
          />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};
