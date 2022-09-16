import { ProductCard } from "../components/ProductCard"

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
      <ProductCard product={product}/>
      <ProductCard product={product}/>
      <ProductCard product={product}/>
      <ProductCard product={product}/>
      </div >
    </div>
  )
}
