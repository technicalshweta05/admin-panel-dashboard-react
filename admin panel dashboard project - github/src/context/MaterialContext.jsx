import { createContext, useState } from "react";

export const MaterialContext = createContext();

export default function MaterialProvider({ children }) {
  const [materials, setMaterials] = useState([
    {
      id: 1,
      name: "Cotton",
      order: 1,
      status: "Active",
    },
  ]);

  const addMaterial = (material) => {
    setMaterials((prev) => [...prev, material]);
  };

  return (
    <MaterialContext.Provider
      value={{
        materials,
        addMaterial,
        setMaterials,
      }}
    >
      {children}
    </MaterialContext.Provider>
  );
}