import React, { useState, createContext } from "react";

export const ProductsContext = createContext();
export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
// const [loading, setLoading] = useState(false);
//
//   useEffect(() => {
//     setLoading(true);
//     const unsubcribe = firebase
//       .firestore()
//       .collection("products")
//       .onSnapshot((snapshot) => {
//         const newProducts = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setLoading(false);
//         setProducts(newProducts);
//       });

//     return () => unsubcribe();
//   }, []);

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductsContext.Provider>
  );
};
