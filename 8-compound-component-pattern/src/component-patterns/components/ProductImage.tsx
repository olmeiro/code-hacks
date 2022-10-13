import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from "../styles/styles.module.css";
import notImage from "../assets/no-image.jpg";

export interface Props {
  img?: string,
  className?: string,
  style?: CSSProperties
}

export const ProductImage = ({img, className, style }: Props) => {
  const {product} = useContext(ProductContext)

  let imgToShow:string

  if(img){
    imgToShow = img
  }else if(product.img) {
    imgToShow = product.img
  }else{
    imgToShow = notImage
  }

  return (
    <img 
      style={style}
      className={`${styles.productImg} ${className}`} 
      src={ imgToShow } alt='Product' 
    />
  )
}