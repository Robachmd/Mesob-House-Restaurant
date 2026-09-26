import { create } from "zustand";

export const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem("mesobUser")) || null,
    isLoggedIn: localStorage.getItem("mesobLoggedIn") === "true",

    registerUser: (userData) => {
        localStorage.setItem("mesobUser", JSON.stringify(userData));
        localStorage.setItem("mesobLoggedIn", "true");

        set({
            user: userData,
            isLoggedIn: true
        });
    },

    login: (loginData) => {
        const savedUser = localStorage.getItem("mesobUser");

        if (!savedUser) {
            return { success: false, message: "Please register first." };
        }
        const user = JSON.parse(savedUser);
        if (loginData.loginType === "email" && loginData.email !== user.email) {
            return { success: false, 
                message: "Email is incorrect." };
        }

        if (loginData.loginType === "phone" && loginData.phone !== user.phone) {
            return { success: false, message: "Phone number is incorrect." };
        }

        if (loginData.password !== user.password) {
            return { success: false, message: "Password is incorrect." };
        }

        localStorage.setItem("mesobLoggedIn", "true");

        set({ user, isLoggedIn: true
        });

        return { success: true };
    },

    logout: () => {
        localStorage.removeItem("mesobLoggedIn");

        set({
            user: null,
            isLoggedIn: false
        });
    }
}));