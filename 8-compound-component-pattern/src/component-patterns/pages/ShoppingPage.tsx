import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

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
      {/* <ProductCard product={product}> 
        <ProductImage />
        <ProductTitle title='Café'/>
        <ProductButtons 
          counter={0} 
          increaseBy={function (value: number): void {
            throw new Error('Function not implemented.');
          } } 
        />
      </ProductCard> */} 
     
     {/* ***Segunda forma: */}
      {/* <ProductCard product={product}> 
        <ProductCard.Image />
        <ProductCard.Title title='Café'/>
        <ProductCard.Buttons 
          counter={0} 
          increaseBy={function (value: number): void {
            throw new Error('Function not implemented.');
          } } 
        />
      </ProductCard> */}

      {/* *** Pasando la info del HOC a los hijos */}
      <ProductCard product={product}> 
        <ProductImage />
        <ProductTitle title='Café mug'/>
        <ProductButtons />
      </ProductCard>

      {/* <ProductCard product={product}> 
        <ProductCard.Image />
        <ProductCard.Title />
        <ProductCard.Buttons />
      </ProductCard> */}
      </div >
    </div>
  )
}
