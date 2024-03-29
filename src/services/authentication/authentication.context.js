import React, { useState, createContext } from "react";
import {
  loginRequest,
  registerRequest,
  signoutRequest,
} from "./authentication.service";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((usr) => {
        setUser(usr);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };

  const resetError = () => {
    setError(null);
  };

  const onLogout = () => {
    signoutRequest().then(() => {
      setUser(null);
      resetError();
    });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    setIsLoading(true);
    registerRequest(email, password)
      .then((usr) => {
        setUser(usr);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };

  onAuthStateChanged(getAuth(), (urs) => {
    if (urs) {
      setUser(urs);
      setIsLoading(false);
    }
  });
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        resetError,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
