// import React from "react";
// import { Link } from "react-router-dom";
// import { UseCart } from "../../Context/CartContext";
// import "./Header.css";

// function Header() {
//   const { itemCounts, total } = UseCart("");

//   return (
//     <header className="header">
//       <div className="header-container">
//         <Link to="/" className="logo-link"><h1 className="logo">MesobHouse</h1></Link>
//         <nav className="navbar">
//           <Link className="nav-link" to="/">Menu</Link>
//           <Link className="nav-link" to="/special">Special Dish Today</Link>
//           <Link className="nav-link" to="/cart">Order & Cart</Link>
//           <Link className="nav-link" to="/dish">Featured Dish</Link>
//           <Link className="nav-link" to="/checkout">Checkout & Delivery</Link>
//           <Link className="nav-link" to="/register">Register</Link>
//           <Link className="nav-link" to="/login">Sign In</Link>
//         </nav>

//         {itemCounts > 0 && total > 0 && (
//           <div  className="cart-summary">
//             <span className="cart-info"> {itemCounts} items</span>
//             <span className="cart-total"> ETB <br />{total}</span>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;
import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../Store/CartStore";
import "./Header.css";

function Header() {
    const itemCount = useCartStore((state) => state.itemCount);
    const total = useCartStore((state) => state.total);

    return (
        <header className="header">
            <div className="header-container">

                <Link to="/" className="logo-link">
                    <h1 className="logo">MesobHouse</h1>
                </Link>

                <nav className="navbar">
                    <Link className="nav-link" to="/">Menu</Link>
                    <Link className="nav-link" to="/special">Special Dish Today</Link>
                    <Link className="nav-link" to="/cart">Order & Cart</Link>
                    <Link className="nav-link" to="/dish">Featured Dish</Link>
                    <Link className="nav-link" to="/checkout">Checkout & Delivery</Link>
                    <Link className="nav-link" to="/register">Register</Link>
                    <Link className="nav-link" to="/login">Sign In</Link>
                </nav>

                {itemCount > 0 && (
                    <div className="cart-summary">
                        <span className="cart-info">{itemCount} items</span>
                        <span className="cart-total">ETB <br />{total}</span>
                    </div>
                )}

            </div>
        </header>
    );
}

export default Header;