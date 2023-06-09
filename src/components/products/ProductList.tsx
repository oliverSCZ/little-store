import { useContext, FC } from 'react';
import { ProductContext } from '../../context/products';
import { ProductCard } from '.';

export const ProductList: FC = () => {

  const { products, isLoading} = useContext( ProductContext);
  if ( isLoading ) {
    return (
      <h1>Cargando...</h1>
    )
  }

  return (
    <>
      <h2>Todos los productos</h2>
        <div className='grid grid-cols-4 gap-10'>
        {
        products.map(product =>
          <ProductCard product={product} />
          )
        }
        </div>
    </>
  )
}
