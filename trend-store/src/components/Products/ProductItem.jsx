import "./ProductItem.css";
import Rating from "./Rating";
import Card from "../UI/Card";

const ProductItem = ({product}) => {
    const {name, description, img, price} = product;
  return (   
    <Card>
        <img src={img} alt={name} />
        <h3 className="product-title"> {name}</h3>
        <p>{description}</p>
        <div className="product-info">
            <Rating />
            <span className="price">{price}₺</span>
        </div>
        <button >Sepete Ekle</button>
     </Card>
  )
}

export default ProductItem