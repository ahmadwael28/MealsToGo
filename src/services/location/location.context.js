import React, { useState, useEffect, useMemo, createContext } from "react";
import { LocationRequest, LocationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyWord) => {
    if (!searchKeyWord.length) return;

    setIsLoading(true);
    setKeyword(searchKeyWord);
    LocationRequest(searchKeyWord.toLowerCase())
      .then(LocationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    if (!keyword.length) return;

    LocationRequest(keyword.toLowerCase())
      .then(LocationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        keyword,
        location,
        search: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
