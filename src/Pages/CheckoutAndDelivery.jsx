import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../Store/CartStore";
import './CheckoutAndDelivery.css'
const checkoutSchema = z.object({
    recipientName: z.string().min(2, "Enter recipient name"),
    phone: z.string().regex(/^(?:\+2519|\+2517|09|07)\d{8}$/, "Enter a valid Ethiopian phone number"),
    email: z.string().email("Enter a valid email"),
    subCity: z.string().min(2, "Enter your sub-city"),
    address: z.string().min(5, "Enter your delivery address"),
    paymentMethod: z.string().min(1, "Select a payment method")
});

function CheckoutAndDelivery() {
    const navigate = useNavigate();
    const items = useCartStore((state) => state.items);
    const total = useCartStore((state) => state.total);
    const clearCart = useCartStore((state) => state.clearCart);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(checkoutSchema)
    });
    function onSubmit(data) {
        console.log(data);
        clearCart();
        alert("Payment confirmed. Your order has been placed!");
        navigate("/");
    }
    if (items.length === 0) {
        return (
            <main className="checkout-empty">
                <h2>Your cart is empty</h2>
                <button className="checkout-menu-button" onClick={() => navigate("/")}>Go to Menu</button>
            </main>
        );
    }
    return (
        <main className="checkout-page">
            <h2 className="checkout-title">Checkout & Delivery</h2>
            <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
                <label className="checkout-label" htmlFor="recipientName">Recipient Name</label>
                <input className="checkout-input" id="recipientName" {...register("recipientName")} />
                {errors.recipientName && <p className="checkout-error">{errors.recipientName.message}</p>}

                <label className="checkout-label" htmlFor="phone">Phone Number</label>
                <input className="checkout-input" id="phone" {...register("phone")} />
                {errors.phone && <p className="checkout-error">{errors.phone.message}</p>}

                <label className="checkout-label" htmlFor="email">Email</label>
                <input className="checkout-input" id="email" type="email" {...register("email")} />
                {errors.email && <p className="checkout-error">{errors.email.message}</p>}

                <label className="checkout-label" htmlFor="subCity">Sub City</label>
                <input className="checkout-input" id="subCity" {...register("subCity")} />
                {errors.subCity && <p className="checkout-error">{errors.subCity.message}</p>}
                <label className="checkout-label" htmlFor="address">Delivery Address</label>
                <textarea className="checkout-textarea" id="address" {...register("address")} />
                {errors.address && <p className="checkout-error">{errors.address.message}</p>}
                
                <label className="checkout-label" htmlFor="paymentMethod">Payment Method</label>
                <select className="checkout-select" id="paymentMethod" {...register("paymentMethod")}>
                    <option value="">Select payment</option>
                    <option value="Telebirr">Telebirr</option>
                    <option value="CBE Birr">CBE Birr</option>
                    <option value="Cash">Cash on Delivery</option>
                </select>
                {errors.paymentMethod && <p className="checkout-error">{errors.paymentMethod.message}</p>}
                <h3 className="checkout-total">Total: ETB {total}</h3>
                <button className="checkout-submit" type="submit">Confirm Payment & Order</button>
            </form>
        </main>
    );
}

export default CheckoutAndDelivery;