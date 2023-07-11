// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { useContext, createContext, useState } from "react";

// export const HygrometerContext = createContext();

// export const useHygrometer = () => useContext(HygrometerContext);

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

// export default function HygrometerProvider({children}) {
//       const [hygrometerValue, setHygrometerValue] = useState(40);

//       return (
//           <HygrometerContext.Provider
//           value={{
//               hygrometerValue,
//               setHygrometerValue
//           }}
//           >
//             {children}
//             </HygrometerContext.Provider>
//       );
//   }

export default function ClimateProvider({ children }) {
  const [climateName, setClimateName] = useState(50);
  const [hygrometerValue, setHygrometerValue] = useState(40);

  return (
    <ClimateContext.Provider
      value={{
        climateName,
        setClimateName,
        hygrometerValue,
        setHygrometerValue,
      }}
    >
      {children}
    </ClimateContext.Provider>
  );
}
