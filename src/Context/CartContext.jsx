import { useCallback,useReducer,useMemo,useContext, createContext } from "react";
import CartReducer from "../Cart/CartReducer";
const cartContext=createContext(null);

export function CartProvider({children}){
    const [items,dispatch]= useReducer(CartReducer,[]);

    const addToCart=useCallback((dish,quantity=1)=>{
        dispatch({type:"ADD" ,payload:{...dish,quantity}})
    },[]);
    const RemoveFromCart=useCallback((id)=>{
        dispatch({type:"REMOVE",payload:id,})
    },[]);
    const ClearCart=useCallback(()=>{
        dispatch({type:"CLEAR"})
    },[]);
    const increaseQuantity=useCallback((id)=>{
        dispatch({type:"INCREASE",payload:id})
    },[])
    const  decreaseQuantity= useCallback((id)=>{
        dispatch({type:"DECREASE",payload:id})
    },[])
    const total=useMemo(()=>{
        return items.reduce((sum,item)=>{
            return sum + item.priceETB*item.quantity
        },0)
    },[items]);
    const itemCount=useMemo(()=>{
        return items.reduce((sum,item)=>{
            return sum + item.quantity
        },0)
    },[items]);
    const itemCounts=useMemo(()=>{
        return items.reduce(()=>{
            return items.length
        },0)
    },[items]);
    const value=useMemo(()=>({items,itemCounts,addToCart,RemoveFromCart,ClearCart,increaseQuantity,decreaseQuantity,total,itemCount}),
        [items,itemCounts,addToCart,RemoveFromCart,ClearCart,increaseQuantity,decreaseQuantity,total,itemCount]
    );
return  (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
)
}


export function UseCart(){
    return useContext(cartContext);
}