import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffee Mug - Brand',
  img: '../../../public/coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping page</h1>
      <hr />
      <
        div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >

      {/* *** primer forma: */}
      {/* *** Pasando la info del HOC a los hijos */}
      <ProductCard 
        product={product}
        className='bg-dark text-white'
      > 
        <ProductImage className='custom-image' />
        <ProductTitle title='Café mug' className='text-bold'/>
        <ProductButtons className='custom-buttons' />
      </ProductCard>

     {/* ***Segunda forma: */}
      <ProductCard product={product}> 
        <ProductCard.Image />
        <ProductCard.Title />
        <ProductCard.Buttons />
      </ProductCard>
      </div >
    </div>
  )
}
