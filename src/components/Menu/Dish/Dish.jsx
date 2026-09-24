// import { UseCart } from "../../../Context/CartContext";

import { useCartStore } from "../../../Store/CartStore";
import { Link } from "react-router-dom";
import "./Dish.css";

function Dish({ dish }) {
    const addToCart = useCartStore((state) => state.addToCart);
    //     const { addToCart } = UseCart();
    
    function handleClick() {
        addToCart({ ...dish, image: `/images/${dish.slug}.png` });
    }

    return (
        <div className="dish">

            <Link to={`/dish/${dish.id}`} state={{ dish }}>
                <img src={`/images/${dish.slug}.png`} alt={dish.nameEn} />
                <h3>{dish.nameEn}</h3>
            </Link>

            <div className="dish-info">
                <span className="spicy-badge">{dish.spiceLevel}</span>
            </div>

            <p>{dish.description}</p>

            <div className="dish-action">
                <p className="price">ETB {dish.priceETB}</p>

                <button onClick={handleClick} className="order-button">
                    +Add
                </button>
            </div>

        </div>
    );
}

export default Dish;