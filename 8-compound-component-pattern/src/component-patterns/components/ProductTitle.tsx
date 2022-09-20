import { useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from "../styles/styles.module.css";

export interface Props {
  className?: string
  title?:string,
  activeClass?: string
}

export const ProductTitle = ({ title, className }: Props) => { // se obliga el titulo, si hay mas propiedades uso una interface
  const {product} = useContext(ProductContext)

  return (
    <span className={`${styles.productDescription} ${className}`}>
      { title ? title : product.title}
    </span>
  )
}