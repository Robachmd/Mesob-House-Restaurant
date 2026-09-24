// import { UseCart } from "../../Context/CartContext";
import { useMemo, useState } from "react";
import useFetch from "../../Hooks/UseFetch";
import Dish from "./Dish/Dish";
import "./Menu.css";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import { useCartStore } from "../../Store/CartStore";
import { Link } from "react-router-dom";

function Menu() {
//  const { itemCount,total } = UseCart();
    const itemCount = useCartStore((state) => state.itemCount);
    const total = useCartStore((state) => state.total);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const { data: menuDishes, loading: menuLoading, error: menuError } = useFetch(
        "https://addis-eats-backend.onrender.com/menu/"
    );

    const dishes = menuDishes?.data || [];

    const show = useMemo(() => {
        return dishes.filter((dish) => {
            const matchesCategory = category === "All" || dish.category === category;
            const searchText = search.toLowerCase();

            const matchesSearch =
                dish.nameEn?.toLowerCase().includes(searchText) ||
                dish.nameAm?.includes(searchText) ||
                dish.category?.toLowerCase().includes(searchText);

            return matchesCategory && matchesSearch;
        });
    }, [dishes, category, search]);

    if (menuLoading) {
        return (
            <section className="menu">
                <h1>Our Menu</h1>
                <p>Loading menu...</p>
            </section>
        );
    }

    if (menuError) {
        return (
            <section className="menu">
                <h1>Our Menu</h1>
                <p>Error: {menuError}</p>
            </section>
        );
    }

    return (
        <section className="menu">

            <div className="menu-header">
                <h1>Our Complete Culinary Heritage</h1>
                <p>Every dish is prepared daily from scratch using sun-dried spices, stone-ground legume flours, and clarified herbal butter sourced directly from highland farm cooperatives.</p>
            </div>

            <div className="menu-search">
                <input
                    type="text"
                    value={search}
                    placeholder="Search dishes eg. kitfo"
                    onChange={(event) => setSearch(event.target.value)}
                />

                <p>100% Pure Teff Injera</p>
                <p>Fasting / Tsom Friendly</p>
                <p>Berbere Spiced</p>
            </div>

            <CategoryFilter
                category={category}
                setCategory={setCategory}
                dishes={dishes}
            />

            {show.length === 0 ? (
                <div className="empty-menu">
                    <p>No dishes found.</p>
                </div>
            ) : (
                <div className="dish-grid">
                    {show.map((dish) => (
                        <Dish key={dish.id} dish={dish} />
                    ))}
                </div>
            )}

            <h2>Experience Communal Dining Around the Mesob</h2>

            <div className="communal-dining-content">
                <p className="communal-dining-description">
                    All platters are served with unlimited warm Teff injera rolls and fresh house-made Ayib.
                </p>

                <button className="reserve-mesob-button">
                    Reserve a Group Mesob Table
                </button>
            </div>

            <section className="communal-dining">

                <div className="hospitality-info">

                    <div className="hospitality-item">
                        <h3>HOSPITALITY HOURS</h3>
                        <p>Tuesday - Sunday: 11:30 AM - 11:00 PM</p>
                        <p>Monday: Reserved for Private Banquets</p>
                    </div>

                    <div className="hospitality-item">
                        <h3>DIETARY TRADITIONS</h3>
                        <p>Vegan Fasting (Beyaynetu / Tsom)</p>
                        <p>Traditional Prime Meat Feasts</p>
                        <p>House Tej (Pure Honey Wine)</p>
                    </div>

                    <div className="hospitality-item">
                        <h3>ADDIS LOCATION</h3>
                        <p>Bole Medhanialem, Addis Ababa & express delivery across town.</p>
                        <p>+251 911 234 567</p>
                    </div>

                    <div className="hospitality-item">
                        <h3>TRADITIONAL COFFEE CEREMONY</h3>
                        <p>Traditional Coffee Ceremony daily at 4:00 PM</p>
                        <p>Jebena Buna & Fresh Roasting All Evening</p>
                    </div>

                </div>

                <div className="mesob-story">
                    <h3>Mesob House</h3>
                    <p>Sharing traditions from the Ethiopian highlands — one Gursha at a time.</p>
                </div>

                <div className="banquet-summary">

                    <div className="banquet-summary-info">
                        <strong>{itemCount}</strong>
                        <span>Selected: {itemCount} items</span>
                    </div>

                    <div className="banquet-price">
                        <span>ETB {total.toLocaleString()}</span>
                    </div>

                    <Link to="/cart">Proceed to Cart</Link>

                    <p className="banquet-note">
                        Communal injera included • Ready for banquet checkout
                    </p>

                </div>

            </section>

        </section>
    );
}

export default Menu;