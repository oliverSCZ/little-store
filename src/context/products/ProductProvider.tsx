import { FC, useEffect, useState } from 'react'
import { ProductContext } from './ProductContext';
import productsDb from '../../api/productsDb';
import { IProduct } from '../../interfaces/product';

interface Props{
  children: JSX.Element;
}


export const ProductProvider:FC<Props> = ({ children }) => {

const [products, setProducts] = useState([] as IProduct[]);
const [isLoading, setisLoading] = useState(false as boolean);

const getAllProducts = async() => {
  // const data = await fetch('https://fakestoreapi.com/products');
  // const response = await data.json();
  // console.log({ response });
  // setisLoading( true );
  setTimeout(() => {
    setisLoading(false);
    }, 4000);
  const {data} = await productsDb.get('/products');
  setisLoading( true );
  setProducts(data.products);
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
