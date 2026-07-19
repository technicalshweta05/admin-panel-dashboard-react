import { createContext, useState } from "react";

export const ParentCategoryContext = createContext();

export default function ParentCategoryProvider({ children }) {
  const [categories, setCategories] = useState([
    {
      id: 1,
      image: "",
      name: "Sofa",
      order: 1,
      status: "Active",
    },
  ]);

  const addCategory = (category) => {
    setCategories((prev) => [...prev, category]);
  };

  return (
    <ParentCategoryContext.Provider
      value={{
        categories,
        addCategory,
        setCategories,
      }}
    >
      {children}
    </ParentCategoryContext.Provider>
  );
}