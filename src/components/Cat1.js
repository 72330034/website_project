import "../styles/Cat1.css";
import Dresses from "../assets/Dresses.jpeg"
import Tops from "../assets/Tops.jpeg";
import Shoes from "../assets/Shoes.jpeg";
const Cat1=()=> {
  return (
    <div className="cat1">
      <h2>Shop by Category</h2>
      <div className="cat-grid">
        <div className="cat-card">
          <img src={Dresses} alt="" />
          <h3>Dresses</h3>
        </div>

        <div className="cat-card">
          <img src={Tops} alt="" />
          <h3>Tops</h3>
        </div>

        <div className="cat-card">
          <img src={Shoes} alt="" />
          <h3>Shoes</h3>
        </div>
      </div>
    </div>
  );
}
export default Cat1;