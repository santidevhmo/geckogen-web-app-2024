import ProductCard from "../ProductCard/ProductCard";

// This catalog must contain the products coming from db or stripe
const Catalog = () => {
  return (
    <div className="mt-1 grid grid-cols-2 lg:grid-cols-3 gap-x-1 lg:gap-x-2 gap-y-5">
      <ProductCard 
        productImage={"/gecko-shop-ideal.jpeg"} 
        productTitle={"Product 1"} 
        productPrice={467.78}/>
      <ProductCard 
        productImage={"/gecko-shop-ideal3.jpeg"} 
        productTitle={"Product 2"} 
        productPrice={340.21}/>
      <ProductCard 
        productImage={"/gecko-shop-ideal4.jpeg"} 
        productTitle={"Product 3"} 
        productPrice={340.21}/>
      <ProductCard 
        productImage={"/gecko-shop-ideal3.jpeg"} 
        productTitle={"Product 4"} 
        productPrice={340.21}/>
      <ProductCard 
        productImage={"/gecko-shop-ideal.jpeg"} 
        productTitle={"Product 5"} 
        productPrice={467.78}/>
      <ProductCard 
        productImage={"/gecko-shop-ideal.jpeg"} 
        productTitle={"Product 6"} 
        productPrice={467.78}/>
      <ProductCard 
        productImage={"/gecko-shop-ideal4.jpeg"} 
        productTitle={"Product 7"} 
        productPrice={340.21}/>
    </div>
  )
}

export default Catalog;