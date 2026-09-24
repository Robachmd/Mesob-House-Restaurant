
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../Store/CartStore";
import "./OrderAndCart.css";

function OrderAndCart() {
    const navigate = useNavigate();

    const items = useCartStore((state) => state.items);
    const itemCount = useCartStore((state) => state.itemCount);
    const total = useCartStore((state) => state.total);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const clearCart = useCartStore((state) => state.clearCart);
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

    function goToCheckout() {
        navigate("/checkout");
    }

    return (
        <div className="order-cart">

            <h2>Your Total Gursha Basket <span>{itemCount}</span></h2>

            {items.length === 0 ? (
                <div className="empty-cart">
                    <p>Your Gursha Basket is empty, please order some dish.</p>
                </div>
            ) : (
                <div className="cart-content">

                    <div className="cart-items">

                        {items.map((item) => (
                            <div className="cart-item" key={item.id}>

                                <img src={item.image} alt={item.nameEn} />

                                <div className="cart-item-info">

                                    <span className="cart-spice">{item.spiceLevel}</span>

                                    <h3>{item.nameEn}</h3>
                                    <p>{item.description}</p>
                                    <strong>ETB {item.priceETB.toLocaleString()}</strong>

                                    <div className="quantity-control">

                                        <button type="button" onClick={() => decreaseQuantity(item.id)}>
                                            -
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button type="button" onClick={() => increaseQuantity(item.id)}>
                                            +
                                        </button>

                                    </div>

                                    <button type="button" onClick={() => removeFromCart(item.id)}>
                                        Remove
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>

                    <div className="cart-summary">

                        <div className="sidebar-total">
                            <span>Grand Total</span>
                            <strong>ETB {total.toLocaleString()}</strong>
                        </div>

                        <button type="button" onClick={clearCart}>
                            Clear Cart
                        </button>

                        <button type="button" onClick={goToCheckout}>
                            Proceed to Delivery Checkout
                        </button>

                    </div>

                </div>
            )}

            <div className="gursha-hospitality">

                <h2>Gursha Hospitality & Dining Etiquette</h2>

                <h3>Traditional Handwash Basin</h3>
                <p>No Cutlery Needed (True Gursha)</p>
                <p>Scented warm lemon towels and hand-rinsing urn presentation.</p>
                <p>We embrace the communal joy of eating with fresh Injera rolls.</p>

                <h3>Kitchen Chef Note / Injera Separation Preference</h3>
                <p><strong>Optional</strong></p>
                <p>Please wrap extra Teff rolls in heat-retaining gold foil separately from the Doro Wat pot.</p>

                <h3>The Meaning of Gursha (ጉርሻ)</h3>
                <p>In Habesha dining culture, placing a savory morsel directly into a companion's mouth with love cements friendship, trust, and shared celebration.</p>

                <h2>Mesob House</h2>
                <p>Sharing traditions from the Ethiopian highlands — one Gursha at a time.</p>

                <h3>HOSPITALITY HOURS</h3>
                <p>Tuesday – Sunday: 11:30 AM – 11:00 PM</p>
                <p>Monday: Reserved for Private Banquets</p>

                <h3>DIETARY TRADITIONS</h3>
                <p>Vegan Fasting (Beyaynetu / Tsom)</p>
                <p>Traditional Prime Meat Feasts</p>
                <p>House Tej (Pure Honey Wine)</p>

                <h3>ADDIS LOCATION</h3>
                <p>Bole Medhanialem, Addis Ababa & express delivery across town.</p>
                <p>+251 911 234 567</p>

                <h3>Traditional Coffee Ceremony</h3>
                <p>Traditional Coffee Ceremony daily at 4:00 PM</p>
                <p>Jebena Buna & Fresh Roasting All Evening</p>

            </div>

        </div>
    );
}

export default OrderAndCart;