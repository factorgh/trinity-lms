import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    authenticate: false,
    user: null,
  });

  console.log("-------------------auth1--------", auth);
  //check auth user

  // async function checkAuthUser() {
  //   try {
  //     const data = await checkAuthService();
  //     if (data.success) {
  //       setAuth({
  //         authenticate: true,
  //         user: data.data.user,
  //       });
  //     } else {
  //       setAuth({
  //         authenticate: false,
  //         user: null,
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     if (!error?.response?.data?.success) {
  //       setAuth({
  //         authenticate: false,
  //         user: null,
  //       });
  //     }
  //   }
  // }

  // function resetCredentials() {
  //   setAuth({
  //     authenticate: false,
  //     user: null,
  //   });
  // }

  // useEffect(() => {
  //   checkAuthUser();
  // }, []);

  console.log(auth, "gf");

  return (
    <AuthContext.Provider value={{ setAuth, auth }}>
      {children}
    </AuthContext.Provider>
  );
}
