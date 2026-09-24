import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

const Main = lazy(() => import("./components/Main/Main"));
const OrderAndCart = lazy(() => import("./Pages/OrderAndCart"));
const FeaturedDish = lazy(() => import("./Pages/FeaturedDish"));
const JoinAndRegister = lazy(() => import("./Pages/JoinAndRegister"));
const GuestLogin = lazy(() => import("./Pages/GuestLogin"));
const CheckoutAndDelivery = lazy(() => import("./Pages/CheckoutAndDelivery"));
const SpecialDishToday = lazy(() => import("./Pages/SpecialDishToday"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
    return (
        <ErrorBoundary>

            <Header />

            <Suspense fallback={<div className="page-loading"><p>Loading Mesob House...</p></div>}>

                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/cart" element={<OrderAndCart />} />
                    <Route path="/dish/:id" element={<FeaturedDish />} />
                    <Route path="/register" element={<JoinAndRegister />} />
                    <Route path="/login" element={<GuestLogin />} />
                    <Route path="/checkout" element={<CheckoutAndDelivery />} />
                    <Route path="/special" element={<SpecialDishToday />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

            </Suspense>

            <Footer />

        </ErrorBoundary>
    );
}

export default App;