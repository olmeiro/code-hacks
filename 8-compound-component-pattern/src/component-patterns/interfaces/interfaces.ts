import { ReactElement } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";

export interface Product  {
  id: string,
  title: string,
  img?: string
}

// context api:

export interface ProductContextProps {
  counter: number; 
  increaseBy: (value: number) => void,
  product: Product
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps) : JSX.Element, // viene de Props de ProductCard
  Title: ({ title }: {title?: string;}) => JSX.Element,
  Image: ({ img }: {img?: string | undefined;}) => JSX.Element,
  Buttons: () => JSX.Element
}