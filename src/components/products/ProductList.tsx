import { useContext, FC } from 'react';
import { ProductContext } from '../../context/products';
import { ProductCard } from '.';
import { Spinner } from '..';

export const ProductList: FC = () => {

  const { products, isLoading} = useContext( ProductContext);
  if ( isLoading ) {
    return (
      <div className='animate-pulse'>
        <div className='flex-1 space-y-6 py-1'></div>
            <div className='grid grid-cols-4 gap-10'>
                <Spinner/>
                <Spinner />
           
        </div>
      </div>
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
