import useFetch from "../Hooks/UseFetch";
import { useCartStore } from "../Store/CartStore";
import "./SpecialDishToday.css";
import { Link } from "react-router-dom";
function SpecialDishToday() {
    const addToCart = useCartStore((state) => state.addToCart);

    const { data: specialDishes, loading, error } = useFetch("https://addis-eats-backend.onrender.com/menu/specials");

    const special = specialDishes?.data || [];

    if (loading) return <p>Loading today's special...</p>;
    if (error) return <p>Failed to load today's special.</p>;
    if (special.length === 0) return <p>No special dishes today.</p>;

    return (
        <section className="special-page">

            <div className="fasting-bar">
                <div className="fasting-content">
                    <p>Tsom / Fasting Observance: 12-item Royal Beyaynetu Vegan Platter simmered fresh all day.</p>
                    <p>100% Pure Teff Injera Available</p>
                    <a className="fasting-link" href="/menu">See Fasting Specialties →</a>
                </div>
            </div>

            <section className="hero">
                <div className="hero-content">
                    <p className="hero-eyebrow">TRADITIONAL HABESHA HEARTH</p>
                    <h1 className="hero-title">Communal Warmth,<br /><em>Slow-Cooked Heritage.</em></h1>
                    <p className="hero-description">Handcrafted wats, ancient stone-ground teff injera, and velvety kitfo simmered in 72-hour infused niter kibbeh and heirloom berbere harvested from the Ethiopian highlands.</p>

                    <div className="hero-actions">
                        <a className="hero-button" href="/special">Explore Today's Specials ↓</a>
                        <a className="hero-button-secondary" href="/menu">Full Banquet Menu</a>
                    </div>

                    <p className="hero-note">Buna Ceremony 4:00 PM Daily</p>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <strong className="hero-stat-value">100%</strong>
                            <span className="hero-stat-label">Brown & White Teff</span>
                        </div>
                        <div className="hero-stat">
                            <strong className="hero-stat-value">6+ Hours</strong>
                            <span className="hero-stat-label">Slow Stew Caramels</span>
                        </div>
                        <div className="hero-stat">
                            <strong className="hero-stat-value">Gursha</strong>
                            <span className="hero-stat-label">Hospitality Shared</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <img className="hero-image" src="/images/Specialbanner.png" alt="Mesob feast" />
                    <div className="hero-image-label">
                        <span>Stone Ground</span>
                        <small>Fresh Berbere Pepper</small>
                    </div>
                    <div className="hero-image-info">
                        <small>CENTERPIECE</small>
                        <h3>Great Mesob Feast</h3>
                        <strong>ETB 1,650</strong>
                    </div>
                </div>
            </section>

            <section className="chef-specials">
                <p className="section-eyebrow">FROM THE CLAY POTS</p>
                <h2 className="section-title">Today's Curated Chef Specials</h2>
                <p className="section-description">Carefully balanced stews prepared at dawn using our matriarch's 40-spice blend, served piping hot on hand-stretched injera.</p>

                <div className="special-filter">
                    <span className="filter-label">FILTER:</span>
                    <button className="filter-button">All ({special.length})</button>
                    <button className="filter-button">Poultry</button>
                    <button className="filter-button">Fasting / Tsom</button>
                    <button className="filter-button">Chef's Special Today</button>
                </div>

                <div className="special-grid">
                    {special.map((dish) => (
                        <article className="special-card" key={dish.id}>
                            <Link to={`/dish/${dish.id}`} state={{ dish }}>
                                <img className="special-card-image" src={`/images/${dish.slug}.png`} alt={dish.nameEn} />
                            </Link>

                            <Link to={`/dish/${dish.id}`} state={{ dish }}>
                                <h3 className="special-card-title">{dish.nameEn}</h3>
                            </Link>
                            <div className="special-card-content">
                                <p className="special-card-name-am">{dish.nameAm}</p>
                                <p className="special-card-description">{dish.description}</p>
                                 <p className="special-card-ingredients">{dish.ingredients?.join(", ")}</p>

                                <div className="special-card-footer">
                                    <strong className="special-card-price">ETB {dish.priceETB}</strong>
                                    <div className="special-card-actions">
                                        <button className="details-button">View Details</button>
                                        <button onClick={() => addToCart({ ...dish, image: `../../public/images/${dish.slug}.png` })} className="quick-add-button">Quick Add</button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="gursha-section">
                <div className="gursha-content">
                    <p className="gursha-eyebrow">THE SPIRIT OF GURSHA</p>
                    <h2 className="gursha-title">"Those Who Share a Mesob Never Walk Alone."</h2>
                    <p className="gursha-description">Gursha is the cherished act of honoring a companion by rolling choice morsels of wat within warm injera and feeding them directly by hand.</p>
                    <p className="gursha-description">At Mesob House, every table is configured for communal warmth and slow gratitude.</p>
                </div>

                <div className="gursha-products">
                    <article className="product-card">
                        <div className="product-top">
                            <span className="product-label">HOUSE-FERMENTED</span>
                            <strong className="product-price">ETB 350</strong>
                        </div>
                        <h3 className="product-title">Golden Tej (Honey Wine)</h3>
                        <p className="product-description">Crafted in-house using raw Ethiopian wild honey and dried Gesho, cold-aged for 21 days in glass carafes.</p>
                        <p className="product-meta">500ml Carafe • 11% ABV</p>
                        <button className="product-button">+ Add Carafe</button>
                    </article>

                    <article className="product-card">
                        <div className="product-top">
                            <span className="product-label">DAILY INFUSION</span>
                            <strong className="product-price">ETB 80</strong>
                        </div>
                        <h3 className="product-title">Highland Spiced Shai</h3>
                        <p className="product-description">Slow-simmered highland black tea leaves infused with crushed cinnamon bark, fragrant cardamom pods, cloves, and wild ginger.</p>
                        <p className="product-meta">Served with Raw Sugar</p>
                        <button className="product-button">+ Add Cup</button>
                    </article>

                    <article className="ceremony-card">
                        <h3 className="ceremony-title">Authentic Clay Jebena Buna Ceremony</h3>
                        <p className="ceremony-description">Every day at 4:00 PM, frankincense fills our courtyard as green Sidama beans are hand-roasted on iron pans, ground fresh, and brewed in traditional clay Jebenas with popped sorghum snack.</p>
                        <button className="ceremony-button">Reserve Ceremony Seating</button>
                    </article>

                    <article className="injera-card">
                        <h3 className="product-title">Extra Teff Injera Rolls</h3>
                        <p className="product-meta">Basket of 3</p>
                        <strong className="product-price">ETB 90</strong>
                        <p className="product-description">Naturally gluten-friendly ancient grain, fermented 3 days for airy eyes.</p>
                        <button className="product-button">+ Add</button>
                    </article>
                </div>
            </section>

            <section className="reviews-section">
                <p className="section-eyebrow">VOICES AROUND THE MESOB</p>
                <h2 className="section-title">Honored Guest Reflections</h2>

                <div className="reviews-grid">
                    <article className="review-card">
                        <p className="review-text">"The Doro Wat was so reminiscent of my grandmother's cooking in Gondar. The berbere depth and the slow-simmered onion sweet finish are impossible to find elsewhere."</p>
                        <div className="review-author">
                            <span className="review-avatar">AM</span>
                            <div>
                                <strong className="review-name">Amanuel Mengistu</strong>
                                <span className="review-role">Bole Resident & Food Patron</span>
                            </div>
                        </div>
                    </article>

                    <article className="review-card">
                        <p className="review-text">"Their Fasting Beyaynetu is unmatched on Wednesdays. 12 vibrant dishes, and the Shiro tagamino came out bubbling in clay. True culinary devotion."</p>
                        <div className="review-author">
                            <span className="review-avatar">ST</span>
                            <div>
                                <strong className="review-name">Sara Tesfaye</strong>
                                <span className="review-role">Plant-Based Dining Advocate</span>
                            </div>
                        </div>
                    </article>

                    <article className="review-card">
                        <p className="review-text">"We hosted a 10-person family reunion around their large handcrafted mesobs. The coffee ceremony with fresh frankincense made the evening unforgettable."</p>
                        <div className="review-author">
                            <span className="review-avatar">DK</span>
                            <div>
                                <strong className="review-name">Dr. Kebede Wolde</strong>
                                <span className="review-role">Diaspora Homecoming Guest</span>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <p className="cta-eyebrow">JOIN OUR TABLE</p>
                    <h2 className="cta-title">Experience Authentic Habesha Warmth Tonight</h2>
                    <p className="cta-description">Whether gathering around our circular mesobs for communal dining or ordering freshly baked injera to your home in Addis Ababa.</p>

                    <div className="cta-actions">
                        <button className="cta-button">Book a Mesob Table</button>
                        <button className="cta-button-secondary">View Complete Menu</button>
                    </div>
                </div>
            </section>

            <div className="special-footer">
                <div className="footer-brand">
                    <h2>Mesob House</h2>
                    <p className="footer-description">Sharing traditions from the Ethiopian highlands — one Gursha at a time.</p>
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">HOSPITALITY HOURS</h3>
                    <p className="footer-text">Tuesday – Sunday: 11:30 AM – 11:00 PM</p>
                    <p className="footer-text">Monday: Reserved for Private Banquets</p>
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">DIETARY TRADITIONS</h3>
                    <p className="footer-text">Vegan Fasting (Beyaynetu / Tsom)</p>
                    <p className="footer-text">Traditional Prime Meat Feasts</p>
                    <p className="footer-text">House Tej (Pure Honey Wine)</p>
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">ADDIS LOCATION</h3>
                    <p className="footer-text">Bole Medhanialem, Addis Ababa & express delivery across town.</p>
                    <p className="footer-text">+251 911 234 567</p>
                </div>
            </div>

        </section>
    );
}

export default SpecialDishToday;