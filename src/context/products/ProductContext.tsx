import {createContext} from "react";
import { IProduct } from "../../interfaces/product";

interface ContextProps{
  products : IProduct[],
  isLoading : boolean,
}

export const ProductContext = createContext({} as ContextProps);