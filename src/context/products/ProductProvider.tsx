import { FC, useEffect, useState } from 'react'
import { ProductContext } from './ProductContext';

interface Props{
  children: JSX.Element;
}


export const ProductProvider:FC<Props> = ({ children }) => {

const [products, setProducts] = useState([]);
const [isLoading, setisLoading] = useState(false);

const getAllProducts = async() => {

  const data = await fetch('https://fakestoreapi.com/products');
  const response = await data.json();

  console.log({ response });
};

useEffect(() => {
    getAllProducts();
}, [])

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading 
      }}
    >
      { children }
    </ProductContext.Provider>
  )
}
