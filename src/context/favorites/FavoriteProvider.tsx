import { FC, useState, useEffect } from "react";
import { FavoriteContext } from "./FavoriteContext";
import { IProduct } from "../../interfaces/product";
import productsDb from "../../api/productsDb";

interface Props{
  children: JSX.Element | JSX.Element[];
}

export const FavoriteProvider:FC<Props> = ({ children }) => {
  
  const [favoritos, setFavoritos] = useState([] as IProduct[]);
  const [isLoading, setIsLoading] = useState(false);

  const addFavorite = async(productId:number) => {
    setIsLoading(true)
    const { data } = await productsDb.get('/products/' + productId)
    const arrayFavoritos = [ ...favoritos, data]
    setFavoritos(arrayFavoritos); 
    setIsLoading(false);
    localStorage.setItem('Favoritos', JSON.stringify(arrayFavoritos));
  };

  const showFavoritesLocalStorage = () => {
    const storedFavorites = localStorage.getItem('Favoritos');
      if ( storedFavorites) {
      setFavoritos(JSON.parse(storedFavorites)) 
      }
  }

  useEffect(() => {
    showFavoritesLocalStorage();
  }, [])
  

  return (
    <FavoriteContext.Provider
    value={{
      favoritos,
      addFavorite,
    }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

