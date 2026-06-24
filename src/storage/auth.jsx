import { createContext, useContext } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }){
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
  };

  return (
    <AuthContext.Provider value={{ storeTokenInLS }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider