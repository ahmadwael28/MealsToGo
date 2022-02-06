import camelize from "camelize";
import { locations } from "./location.mock";

export const LocationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];

    if (!locationMock) {
      reject("location not found");
    } else {
      resolve(locationMock);
    }
  });
};

export const LocationTransform = ({ results }) => {
  const formattedResult = camelize(results);
  const location = formattedResult[0];
  const { geometry = {} } = location;
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
