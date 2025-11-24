import  "../styles/Home.css"
import Cat1 from "../components/Cat1";
import NewsLetter from "../components/NewsLetter";
import Text from "../components/Text";
import Product from '../components/Product';
import Dresses from "../assets/Dresses.jpeg";
import Jackets from "../assets/Jackets.jpeg";
import Tops from "../assets/Tops.jpeg";
import Jeans from "../assets/Jeans.jpeg";
const Home=({addToCart})=>{
  const products = [
    { id: 1, name: 'Summer Dress', price: 49.99, image: Dresses },
    { id: 2, name: 'Blouse', price: 29.99, image: Jackets},
    { id: 3, name: 'Jeans', price: 59.99, image: Tops},
    { id: 4, name: 'Sweater', price: 39.99, image: Jeans},
  ];
return(
<div className="home">
  <h1 className="h1">Welcome to D&L Women Store!</h1>
  <Text/>
  <Cat1 />
   <h2>Our Collection</h2>
      <div className="products-grid">
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
  <NewsLetter />
</div>
);
  
}
export default Home;