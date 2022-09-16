import { ReactElement } from "react";

import styles from "../styles/styles.module.css";
import coffeeMug from "../../../public/coffee-mug.png";
import notImage from "../assets/no-image.jpg";

import { useProduct } from "../hooks/useProduct";

interface Props {
  product: Product;
  children?: ReactElement | ReactElement []
}

interface Product  {
  id: string,
  title: string,
  img?: string
}

// components

export const ProductImage = ({img = ''}) => { // el string hace la img opcional-un string vacio para un ternario no tiene valor
  return (
    <img className={styles.productImg} src={img ? img : notImage} alt='Product' />
  )
}

export const ProductTitle = ({ title}:{title:string}) => { // se obliga el titulo, si hay mas propiedades uso una interface
  return (
    <span className={styles.productDescription}>{title}</span>
  )
}

interface ProductButtonsProps {
  counter: number,
  increaseBy: (value: number) => void
}

export const ProductButtons = ({counter, increaseBy}: ProductButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  )
}

export const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct()
  return (
    <div className={styles.productCard}>
      { children }
      {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons 
        counter={counter} 
        increaseBy={increaseBy}       
      /> */}
    </div>
  );
};

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons
