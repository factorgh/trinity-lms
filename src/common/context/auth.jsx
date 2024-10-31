import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: "",
    user: null,
  });

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      setAuth({
        ...auth,
        token: auth.accesToken,
        user: auth.user,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
