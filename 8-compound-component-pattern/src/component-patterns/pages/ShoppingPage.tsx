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
        <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)' }} />
        <ProductTitle title='Café mug' className='text-bold' activeClass='active'/>
        <ProductButtons className='custom-buttons' />
      </ProductCard>

     {/* ***Segunda forma: */}
      <ProductCard product={product}> 
        <ProductCard.Image className='custom-image' />
        <ProductCard.Title className='text-bold' activeClass='active' />
        <ProductCard.Buttons className='custom-buttons' />
      </ProductCard>
      </div >

      {/* *** styles en componentes: */}
      <ProductCard 
      product={product}
      style={{
        backgroundColor: '#70D1F8'
      }}
      > 
        <ProductImage style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)'  }}/>
        <ProductTitle style={{ fontWeight: 'bold' }}/>
        <ProductButtons style={{ display:'flex', justifyContent: 'end' }}/>
      </ProductCard>
    </div>

    
  )
}
