import { createContext, useState } from "react";

export const SubCategoryContext = createContext();

export default function SubCategoryProvider({ children }) {
  const [subCategories, setSubCategories] = useState([]);

  const addSubCategory = (subCategory) => {
    setSubCategories((prev) => [...prev, subCategory]);
  };

  return (
    <SubCategoryContext.Provider
      value={{
        subCategories,
        addSubCategory,
        setSubCategories,
      }}
    >
      {children}
    </SubCategoryContext.Provider>
  );
}