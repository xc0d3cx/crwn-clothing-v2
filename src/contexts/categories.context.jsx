import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";



export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  

  useEffect (() => {
    const getCategoiresMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories')
      //console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    
    getCategoiresMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
