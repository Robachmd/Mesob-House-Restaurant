import { create } from "zustand";

function calculateCart(items) {
    let itemCount = 0;
    let total = 0;

    items.forEach((item) => {
        itemCount += item.quantity;
        total += item.priceETB * item.quantity;
    });

    return { itemCount, total };
}

export const useCartStore = create((set) => ({
    items: [],
    itemCount: 0,
    total: 0,

    addToCart: (dish, quantity = 1) =>
        set((state) => {
            const existingItem = state.items.find((item) => item.id === dish.id);

            let newItems;

            if (existingItem) {
                newItems = state.items.map((item) =>
                    item.id === dish.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                newItems = [...state.items, { ...dish, quantity }];
            }

            return { items: newItems, ...calculateCart(newItems) };
        }),

    removeFromCart: (id) =>
        set((state) => {
            const newItems = state.items.filter((item) => item.id !== id);
            return { items: newItems, ...calculateCart(newItems) };
        }),

    clearCart: () => ({
        items: [],
        itemCount: 0,
        total: 0
    }),

    increaseQuantity: (id) =>
        set((state) => {
            const newItems = state.items.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
            return { items: newItems, ...calculateCart(newItems) };
        }),

    decreaseQuantity: (id) =>
        set((state) => {
            const newItems = state.items.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
            );

            return { items: newItems, ...calculateCart(newItems) };
        })
}));