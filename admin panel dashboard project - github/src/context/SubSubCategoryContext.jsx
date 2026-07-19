import { createContext, useState } from "react";

export const SubSubCategoryContext = createContext();

export default function SubSubCategoryProvider({ children }) {
  const [subSubCategories, setSubSubCategories] = useState([]);

  const addSubSubCategory = (item) => {
    setSubSubCategories((prev) => [...prev, item]);
  };

  return (
    <SubSubCategoryContext.Provider
      value={{
        subSubCategories,
        addSubSubCategory,
        setSubSubCategories,
      }}
    >
      {children}
    </SubSubCategoryContext.Provider>
  );
}