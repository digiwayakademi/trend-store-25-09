import "./CartItem.css";

const CartItem = ({product}) => {
    const {name,  img, price,amount} = product;
  return (
    <li className="cart-item">
        <div className="cart-item-img">
            <img src={img} alt={name} />
        </div>
        <div className="cart-item-info">
            <div className="cart-item-texts">
                <b>{name}</b>
                <div>
                    <span>₺{price} x</span>
                    <span className="cart-item-amount">{amount}</span>
                </div>
            </div>
            <a href="/" className="cart-item-remove">x</a>
        </div>
    </li>
  )
}

export default CartItem