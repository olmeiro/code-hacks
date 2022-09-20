import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from "../styles/styles.module.css";

export interface Props {
  className?: string,
  title?:string,
  activeClass?: string,
  style?: CSSProperties

}

export const ProductTitle = ({ title, className, style }: Props) => { // se obliga el titulo, si hay mas propiedades uso una interface
  const {product} = useContext(ProductContext)

  return (
    <span
    style={style}
      className={`${styles.productDescription} ${className}`}
    >
      { title ? title : product.title}
    </span>
  )
}