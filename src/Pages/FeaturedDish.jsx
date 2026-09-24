import { useState } from 'react';
// import { UseCart } from '../Context/CartContext';
import { useCartStore } from "../Store/CartStore";
import { useLocation, useNavigate } from "react-router-dom";
import './FeaturedDish.css'
function FeaturedDish() {
const navigate = useNavigate();
const location = useLocation();
const { dish } = location.state || {};
// const { addToCart } = UseCart();
const addToCart = useCartStore((state) => state.addToCart);
const [quantity, setQuantity] = useState(1);
const [heatLevel, setHeatLevel] = useState("Traditional");
const [injeraType, setInjeraType] = useState("Standard"); 
const [selectedSide, setSelectedSide] = useState("None");

if (!dish) return <p>Please go back to the menu and select a dish.</p>;

const extraInjeraCost = injeraType === "Pure Brown Teff" ? 60 : 0;
const singleDishPrice = dish.priceETB + extraInjeraCost;
const finalCartPrice = singleDishPrice * quantity;

function handleAddToOrder() {
const finalDishChoice = {
    ...dish,
    nameEn: `${dish.nameEn} (${heatLevel}, ${injeraType} Injera)`,
    priceETB: singleDishPrice, 
    heatLevel: heatLevel,
    injeraType: injeraType,
    sideAccent: selectedSide
};

addToCart(finalDishChoice, quantity);
navigate("/cart");
}

return (
<div className="FeaturedDish">
    <h2>{dish.nameEn} ({dish.nameAm})</h2>
    <p>{dish.description}</p>
    <p className="price">Price per item: {singleDishPrice} ETB</p>

    <div className="section">
    <h3>1. Select Heat Level (Current: {heatLevel})</h3>
    <button onClick={() => setHeatLevel("Mild")}>Mild</button>
    <button onClick={() => setHeatLevel("Traditional")}>Traditional</button>
    <button onClick={() => setHeatLevel("Medium")}>Medium</button>
    </div>

    <div className="section">
    <h3>2. Select Injera Base (Current: {injeraType})</h3>
    <button onClick={() => setInjeraType("Standard")}>Standard Blend (Included)</button>
    <button onClick={() => setInjeraType("Pure Brown Teff")}>Pure Brown Teff (+60 ETB)</button>
    </div>

    <div className="section">
    <h3>3. Choose One Side (Current: {selectedSide})</h3>
    <button onClick={() => setSelectedSide("Fresh Ayib")}>Fresh Ayib</button>
    <button onClick={() => setSelectedSide("Stewed Goman")}>Stewed Goman</button>
    <button onClick={() => setSelectedSide("House Awaze")}>House Awaze</button>
    </div>

    <div className="checkout-section">
    <h3>4. Quantity</h3>
    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
    <span> {quantity} </span>
    <button onClick={() => setQuantity(quantity + 1)}>+</button>
    
    <br/><br/>
    
    <button onClick={handleAddToOrder}>
        Add to Cart — Total: {finalCartPrice} ETB
    </button>
    </div>
</div>
);
}

export default FeaturedDish;
