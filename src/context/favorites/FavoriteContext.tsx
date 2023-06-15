import { createContext } from "react";
import { IProduct } from "../../interfaces/product";

interface ContextFavorite {
  favoritos : IProduct[];
  addFavorite : (productId: number) => void;
  deleteFavorite : (productId: number) => void;
}

export const FavoriteContext = createContext({}as ContextFavorite);