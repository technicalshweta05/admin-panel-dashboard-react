import { createContext, useState } from "react";

export const ColorContext = createContext();

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState([
    {
      id: 1,
      name: "Black",
      color: "#000000",
      order: 1,
      status: "Active",
    },
  ]);

  const addColor = (color) => {
    setColors((prev) => [...prev, color]);
  };

  return (
    <ColorContext.Provider
      value={{
        colors,
        addColor,
        setColors,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
}