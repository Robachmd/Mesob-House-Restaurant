import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../Validation/schemas";
import { useAuthStore } from "../Store/AuthStore";
import "./GuestLogin.css";

function GuestLogin() {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);

    const [loginType, setLoginType] = useState("email");

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: "", phone: "", password: "" }
    });

    function handleLogin(data) {
        const result = login({ ...data, loginType });

        if (!result.success) {
            alert(result.message);
            return;
        }

        alert("Login successful!");
        navigate("/");
    }

    function selectLoginType(type) {
        setLoginType(type);
        setValue("email", "");
        setValue("phone", "");
    }

    return (
        <div className="guest-login">

            <main className="login-main">

                <h2 className="login-title">Login</h2>

                <div className="login-type-buttons">
                    <button className={loginType === "email" ? "login-type active" : "login-type"} type="button" onClick={() => selectLoginType("email")}>
                        Email
                    </button>

                    <button className={loginType === "phone" ? "login-type active" : "login-type"} type="button" onClick={() => selectLoginType("phone")}>
                        Phone
                    </button>
                </div>

                <form className="login-form" onSubmit={handleSubmit(handleLogin)}>

                    {loginType === "email" && (
                        <>
                            <label className="login-label" htmlFor="email">Email</label>

                            <input className="login-input" id="email" type="email" placeholder="Enter your email" {...register("email")} />

                            {errors.email && <p className="login-error">{errors.email.message}</p>}
                        </>
                    )}

                    {loginType === "phone" && (
                        <>
                            <label className="login-label" htmlFor="phone">Phone Number</label>

                            <input className="login-input" id="phone" type="tel" placeholder="09XXXXXXXX" {...register("phone")} />

                            {errors.phone && <p className="login-error">{errors.phone.message}</p>}
                        </>
                    )}

                    <label className="login-label" htmlFor="password">Password</label>

                    <input className="login-input" id="password" type="password" placeholder="Enter your password" {...register("password")} />

                    {errors.password && <p className="login-error">{errors.password.message}</p>}

                    <button className="login-submit" type="submit">
                        Sign In to Mesob House
                    </button>

                </form>

                <p className="register-text">New to our dining family?</p>

                <button className="register-button" type="button" onClick={() => navigate("/register")}>
                    Join the Mesob Table & Register
                </button>

            </main>

            <aside className="feast-circle">

                <div className="feast-header">
                    <p className="feast-eyebrow">MESOB FEAST CIRCLE & PERKS</p>

                    <h2>A table shared is a <br /> bond celebrated.</h2>

                    <p className="amharic-title">«ማዕድ የጋራ ነው»</p>
                </div>

                <div className="feast-intro">
                    <h3>Sign into your culinary sanctuary.</h3>

                    <p>Track your seasonal fasting platters, express your Jebena preferences, and summon traditional Addis feasts straight to your door.</p>
                </div>

                <div className="feast-perks">

                    <article className="perk-card">
                        <div className="perk-icon">
                            <img src="/images/GuestLoginBanner.png" alt="Habesha traditional food" />
                        </div>

                        <div className="perk-content">
                            <h3>Sunday Jebena Buna Circle</h3>
                            <p>Exclusive roasting access for verified members.</p>
                        </div>
                    </article>

                    <article className="perk-card">
                        <div className="perk-icon">🎁</div>

                        <div className="perk-content">
                            <h3>10 Gursha Points / ETB 100</h3>
                            <p>Redeem against rare honey tej batches or special communal platters.</p>
                        </div>
                    </article>

                    <article className="perk-card">
                        <div className="perk-icon">🛵</div>

                        <div className="perk-content">
                            <h3>Free Bole & Kazanchis Delivery</h3>
                            <p>Priority courier dispatch with heat-insulated clay-stone trays.</p>
                        </div>
                    </article>

                    <article className="perk-card">
                        <div className="perk-icon">💳</div>

                        <div className="perk-content">
                            <h3>Instant Telebirr & CBE Birr</h3>
                            <p>Zero-fee instant table settlement and 1-tap reordering.</p>
                        </div>
                    </article>

                </div>

                <div className="feast-testimonial">
                    <div className="testimonial-symbol">ሰላም</div>

                    <blockquote>"The table ordering is as seamless as eating from our grandmother's mesob."</blockquote>

                    <p className="testimonial-author">DR. SELAMAWIT H. — BOLE MEMBER</p>
                </div>

            </aside>

            <div className="login-features">

                <div className="login-feature">
                    <h5>ENCRYPTED SECURITY</h5>
                    <p>Telebirr PIN & CBE Birr verified</p>
                </div>

                <div className="login-feature">
                    <h5>FASTING FEASTS</h5>
                    <p>Tsom Beyaynetu on Wed & Fri</p>
                </div>

                <div className="login-feature">
                    <h5>FRESH INJERA STEAM</h5>
                    <p>Baked three times each day</p>
                </div>

                <div className="login-feature">
                    <h5>BOLE CONCIERGE</h5>
                    <p>+251 911 234 567</p>
                </div>

            </div>

            <div className="login-footer">

                <div className="footer-brand">
                    <h2>Mesob House</h2>
                    <p>Sharing traditions from the Ethiopian highlands — one Gursha at a time.</p>
                </div>

                <div className="footer-section">
                    <h3>HOSPITALITY HOURS</h3>
                    <p>Tuesday – Sunday: 11:30 AM – 11:00 PM</p>
                    <p>Monday: Reserved for Private Banquets</p>
                    <p>Traditional Coffee Ceremony daily at 4:00 PM</p>
                    <p>Jebena Buna & Fresh Roasting All Evening</p>
                    <p>House Tej (Pure Honey Wine)</p>
                </div>

                <div className="footer-section">
                    <h3>GUEST ACCOUNT & TRADITIONS</h3>
                    <p>Sign In to Mesob Rewards</p>
                    <p>Create Member Profile</p>
                    <p>Vegan Fasting (Beyaynetu / Tsom)</p>
                </div>

                <div className="footer-section">
                    <h3>ADDIS LOCATION</h3>
                    <p>Bole Medhanialem, Addis Ababa & express delivery across town.</p>
                    <p>+251 911 234 567</p>
                </div>

            </div>

        </div>
    );
}

export default GuestLogin;