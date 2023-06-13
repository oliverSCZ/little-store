import { useContext, FC } from 'react';
import { FavoriteContext } from '../../context/favorites/FavoriteContext'

import { ProductCard, Spinner } from '..';
import { ProductContext } from '../../context/products';

export const FavoriteList: FC = () => {

const { isLoading } = useContext(ProductContext);

const { favoritos } = useContext(FavoriteContext);

  if (!isLoading) {
      return (
        <>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
              <span className="absolute px-3 text-3xl font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                Favoritos
              </span>
          </div>
            <div className='grid grid-cols-4 gap-10'>
            {
            favoritos.map(product =>
              <ProductCard product={product} />
              )
            }
            </div>
        </>
      )
  } 
  return (
    <>
        <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
              <span className="absolute px-3 text-3xl font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                Favoritos
              </span>
        </div>
      <div className='animate-pulse'>
        <div className='flex-1 space-y-6 py-1'></div>
            <div className='grid grid-cols-4 gap-10'>
                <Spinner/>
        </div>
      </div>
    </>
  )
}
