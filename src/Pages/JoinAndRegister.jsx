
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../Validation/schemas";
import { useAuthStore } from "../Store/AuthStore";
import "./JoinAndRegister.css";

function JoinAndRegister() {
    const navigate = useNavigate();
    const registerUser = useAuthStore((state) => state.registerUser);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: ""
        }
    });

    function handleRegister(data) {
        registerUser(data);
        alert("Registration successful!");
        navigate("/login");
    }

    return (
        <div className="register-page">

            <main className="register-main">

                <h2>Join the Mesob Table</h2>

                <form className="register-form" onSubmit={handleSubmit(handleRegister)}>
                    <label htmlFor="name">
                        Full Name
                    </label>

                    <input id="name" type="text" placeholder="Enter your full name" {...register("name")} />
                    {errors.name && (
                        <p className="register-error">
                            {errors.name.message}
                        </p>
                    )}
                    <label htmlFor="email">
                        Email
                    </label>
                    <input id="email" type="email" placeholder="Enter your email" {...register("email")}/>
                    {errors.email && (
                        <p className="register-error">
                            {errors.email.message}
                        </p>
                    )}

                    <label htmlFor="phone">
                        Phone Number
                    </label>

                    <input id="phone" type="tel"
                        placeholder="0912345678" {...register("phone")}/>
                    {errors.phone && (
                        <p className="register-error">
                            {errors.phone.message}
                        </p>
                    )}

                    <label htmlFor="password">
                        Password
                    </label>

                    <input id="password" type="password" placeholder="Enter password" {...register("password")} />
                    {errors.password && (
                        <p className="register-error">
                            {errors.password.message}
                        </p>
                    )}
                    <label htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input id="confirmPassword" type="password" placeholder="Confirm password" {...register("confirmPassword")} />

                    {errors.confirmPassword && (
                        <p className="register-error">
                            {errors.confirmPassword.message}
                        </p>
                    )}

                    <button type="submit">
                        Create Mesob Account
                    </button>

                </form>

                <p className="register-login-text">
                    Already part of our dining family?
                </p>

                <button className="register-login-button" type="button" onClick={() => navigate("/login")} >
                    Sign in here
                </button>
            </main>
            <aside className="register-aside">
                <span>
                    የክብር እንግዳ • MEMBER CIRCLE
                </span>
                <h1>
                    Become an Honored Table Guest
                </h1>
                <p>
                    Immerse yourself in authentic highland hospitality, where every shared meal honors community, connection,
                    and craft.
                </p>
                <div className="register-highlight">
                    <h3>
                        Welcome Gift: Pure Tej or Buna
                    </h3>
                    <p>
                        Enjoy a complimentary flask of house-fermented Tej or a personalized Jebena Buna coffee ceremony with your inaugural banquet booking.
                    </p>
                </div>
                <h3>
                    Communal Gursha Points
                </h3>
                <p>
                    Earn generous loyalty points redeemable for hand-poured pure Teff injera, prime Siga Tibs,
                    and bespoke banquet upgrades.
                </p>

                <h4>
                    Fasting Calendar Alerts
                </h4>

                <p>
                    Timely seasonal notifications for Tsom fasting periods, Chef's Bayaynetu spreads, and lenten
                    specialties.
                </p>

                <h4>
                    Express Addis Delivery
                </h4>

                <p>
                    Save Bole, Kazanchis, Old Airport, or Sarbet drop-offs for fast clay-pot temperature delivery
                    straight to your doorstep.
                </p>

                <h4>
                    Priority Mesob Table Reservations
                </h4>

                <p>
                    Skip standard waitlists for weekend live Kirar acoustic sets and evening green-coffee roasting
                    ceremonies.
                </p>
                <div className="register-quote">
                    <h4>
                        TRADITION IN EVERY BITE
                </h4>
                    <p>
                        "Sharing from the same mesob is the ancient
                        covenant of love and trust."
                    </p>
                    <span>
                        - Habesha Proverb
                    </span>
                </div>
            </aside>
            <div className="register-footer">
                <div className="register-footer-item">
                    <h3>
                        Mesob House
                    </h3>
                    <p>
                        Sharing traditions from the Ethiopian
                        highlands — one Gursha at a time.
                    </p>
                    <img src="/images/registerimage.png" alt="Mesob House"/>

                    <span>
                        Traditional Coffee Ceremony daily at 4:00 PM
                    </span>
                </div>
                <div className="register-footer-item">
                    <h4>
                        HOSPITALITY HOURS
                    </h4>
                    <p>
                        Tuesday – Sunday: 11:30 AM – 11:00 PM
                    </p>
                    <p>
                        Monday: Reserved for Private Banquets
                    </p>
                    <span>
                        Jebena Buna & Fresh Roasting All Evening
                        <br />
                        House Tej (Pure Honey Wine)
                    </span>

                </div>

                <div className="register-footer-item">
                    <h4>
                        GUEST ACCOUNT & TRADITIONS
                    </h4>
                    <p>
                        Sign In to Mesob Rewards.
                        <br />
                        Create Member Profile.
                        <br />
                        Vegan Fasting (Beyaynetu / Tsom)
                    </p>

                </div>

                <div className="register-footer-item">

                    <h4>
                        ADDIS LOCATION
                    </h4>
                    <p>
                        Bole Medhanialem, Addis Ababa &
                        express delivery across town.
                    </p>
                    <span>
                        +251 911 234 567
                    </span>

                </div>

            </div>

        </div>
    );
}

export default JoinAndRegister;
