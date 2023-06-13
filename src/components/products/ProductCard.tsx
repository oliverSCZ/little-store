import { FC, useContext } from 'react';
import { IProduct } from '../../interfaces/product'
import { FavoriteContext } from '../../context/favorites';



interface Props{
  product:IProduct;
}


export const ProductCard:FC<Props> = ({ product }) => {
  const { addFavorite } = useContext(FavoriteContext);

  const addToFavorite = (productId : number) => {
    addFavorite(productId);
  };

  return (
    <div className='flex flex-col justify-center p-5 rounded-lg shadow-md'>
        <img 
          className='m-auto max-w-[150px] w-full h-auto'
          src={ product.thumbnail} 
          alt={ product.title} 
        />
      <div>
      <h3 className='font-bold mb-3'>{product.title}</h3>
      <p className='text-gray-500'>{product.category}</p>
      <p className='text-indigo-600'>{product.price}$</p>
      <button 
      onClick={() => addToFavorite(product.id)}
      className='rounded-md bg-indigo-600 cursor-pointer hover:bg-indigo-700 transition-all p-2 text-white'>
        Agregar a Favoritos
      </button>
      </div>
    </div>
  )
}
