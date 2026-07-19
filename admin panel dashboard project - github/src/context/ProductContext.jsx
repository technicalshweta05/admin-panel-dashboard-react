import { createContext, useState } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}