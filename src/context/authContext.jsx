import { createContext, useContext, useState } from "react";
import { loginUser, logoutUser } from "../services/loginService";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(
    JSON.parse(
      localStorage.getItem("user")
    ) || null
  );

  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  const login = async (credentials) => {

    const response = await loginUser(credentials);

    const userData = response.data.user;

    const accessToken = response.data.accessToken;

    setUser(userData);
    setToken(accessToken);

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    localStorage.setItem(
      "token",
      accessToken
    );

    toast.success(
      "Login successful"
    );

    return userData;
  };

  const logout = async () => {

    await logoutUser();

    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    toast.success(
      "Logged out successfully"
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);