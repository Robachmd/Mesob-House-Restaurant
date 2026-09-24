import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'
function NotFound() {
    return (
        <div className="not-found">
            <section className="not-found-header">
                <p>Empty Mesob</p>
                <h1>404</h1>
                <p>
                    TABLE NOT SET • ERROR
                </p>
                <h2>
                    ይቅርታ! ይህ ገጽ አልተገኘም
                </h2>
                <p>
                    Looks like this dish has already been enjoyed or
                    never made it to the kitchen!
                </p>
                <p>
                    Even the best Gursha sometimes slips! Don't let your
                    appetite wait — our Addis kitchen has hot clay pot
                    wats and freshly rolled teff injera ready for your
                    table right now.
                </p>

            </section>
            <section className="not-found-actions">

                <Link to="/special">
                    Return to Today's Specials
                </Link>

                <Link to="/">
                    Explore Full Menu
                </Link>

                <Link to="/cart">
                    Check Current Order
                </Link>

            </section>
            <section className="house-favorites">

                <h2>
                    HOUSE FAVORITES
                </h2>

                <p>
                    View 25 Traditional Dishes
                </p>

                <h3>
                    Hungry? Here's What Our Guests Love Today
                </h3>

                <div className="favorite-dish">
                    <img src="../../public/images/doro-wat.png" alt="" />

                    <span>
                        Spicy Favorite
                    </span>

                    <h3>
                        Doro Wat
                    </h3>

                    <strong>
                        ETB 650
                    </strong>

                    <p>
                        Slow-simmered farm chicken simmered in rich
                        caramelized shallots, 12-spice berbere, and organic…
                    </p>

                    <p>
                        Served with 2x Teff Injera
                    </p>

                    <Link to="/">
                        Order Now
                    </Link>

                </div>
                <div className="favorite-dish">
                <img src="../../public/images/NotFoundDerek.png" alt="Derek ibs" />

                    <span>
                        Sizzling Clay
                    </span>

                    <h3>
                        Derek Tibs
                    </h3>

                    <strong>
                        ETB 620
                    </strong>

                    <p>
                        Prime tenderloin beef seared with fresh mountain
                        rosemary, sliced green jalapeños, garlic, and
                        served with…
                    </p>

                    <p>
                        Mild or Fiery Crisp
                    </p>

                    <Link to="/">
                        Order Now
                    </Link>

                </div>
                <div className="favorite-dish">
                <img src="../../public/images/NotFoundshiro.png " alt="" />


                    <span>
                        Vegan / Tsom
                    </span>

                    <h3>
                        Shiro Clay Pot
                    </h3>

                    <strong>
                        ETB 450
                    </strong>

                    <p>
                        Stone-ground spiced chickpeas gently simmered with
                        garlic, shallots, and fresh herbs in a boiling clay pot.…
                    </p>

                    <p>
                        100% Plant Based
                    </p>

                    <Link to="/">
                        Order Now
                    </Link>

                </div>

            </section>
            <section className="not-found-concierge">

                <h3>
                    Lost your table or need personalized dietary
                    recommendations?
                </h3>

                <p>
                    +251 911 234 567
                </p>

                <button>
                    Reserve
                </button>

                <p>
                    Our concierge in Bole Medhanialem is delighted to
                    prepare your banquet.
                </p>

            </section>
            <div className="mesob-footer">
                <div className="mesob-footer-brand">

                    <h2>
                        Mesob House
                    </h2>

                    <p>
                        Sharing traditions from the Ethiopian
                        highlands — one Gursha at a time.
                    </p>

                </div>


                <div className="hospitality-hours">

                    <h3>
                        HOSPITALITY HOURS
                    </h3>

                    <p>
                        Tuesday – Sunday: 11:30 AM – 11:00 PM
                    </p>

                    <p>
                        Monday: Reserved for Private Banquets
                    </p>

                </div>


                <div className="dietary-traditions">

                    <h3>
                        DIETARY TRADITIONS
                    </h3>

                    <p>
                        Vegan Fasting (Beyaynetu / Tsom)
                    </p>

                    <p>
                        Traditional Prime Meat Feasts
                    </p>

                    <p>
                        House Tej (Pure Honey Wine)
                    </p>

                </div>


                <div className="addis-location">

                    <h3>
                        ADDIS LOCATION
                    </h3>

                    <p>
                        Bole Medhanialem, Addis Ababa &
                        express delivery across town.
                    </p>

                    <p>
                        +251 911 234 567
                    </p>

                </div>


                <div className="coffee-ceremony">

                    <h3>
                        Traditional Coffee Ceremony
                    </h3>

                    <p>
                        Traditional Coffee Ceremony daily
                        at 4:00 PM
                    </p>

                    <p>
                        Jebena Buna & Fresh Roasting All Evening
                    </p>

                    <p>
                        Jebena Buna Roasting Ceremony
                    </p>

                </div>

            </div>

        </div>
    );
}

export default NotFound;
