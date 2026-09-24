
function CartReducer(state,action) {
    switch(action.type){
        case "ADD":{
            const existingItem= state.find((item)=>{
                return item.id===action.payload.id
            })
            if(existingItem){
                return state;
            }
            return [...state,action.payload]
        }
        case "REMOVE":{
            return state.filter((item)=>{
                return item.id !== action.payload
            })
        }
        case "CLEAR":{
            return []
        }
        case "INCREASE":{
            return state.map((item)=>{
                return item.id===action.payload?{...item,quantity:item.quantity+1}:item
            })
        }
        case "DECREASE":{
            return state.map((item)=>{
                return item.id===action.payload?{...item,quantity:Math.max(1,item.quantity-1)}:item
            })
        }
        default:
            return state;
    }
}

export default CartReducer