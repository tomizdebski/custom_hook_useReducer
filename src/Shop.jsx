import { useReducer } from "react";


////reducer

function reducer(state, action){
    
    switch(action.type){
    
    case "ADD_ITEM": 
    const itemInCart = state.find((item) => item.id === action.payload.id);
    if(itemInCart) {
        console.log(action.payload.id)
        const tempArray = state;
        tempArray[action.payload.id].count ++;

        console.log('temp',tempArray);
        return state
    };
    if(!itemInCart) return [...state, action.payload];

    case "REMOVE_ITEM": return state.filter((item) => item.name !== action.payload);

    case "REMOVE_ITEMS": return [];
    default: ;

  }
  throw Error('Unknown action: ' + action.type);
}
////actions

const remove = (name) => {
    return {
        type: "REMOVE_ITEM",
        payload: name,
    }
}

const add = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item,
    }
}

const removeItems = () => {
    return {
        type: "REMOVE_ITEMS",
    }
}



function Shop() {

    const items=[
        {
            name: "Słonecznik",
            id: 0,
            count: 1,
            price: 10
        },
        {
            name: "Ziemniak",
            id: 1,
            count: 2,
            price: 20
        }
    ];
    

    const [state, dispatch] = useReducer(reducer, []);
    





    return (
        <>
        <h1>Shop</h1>
        <button onClick={() => dispatch(add(items[0]))}> Dodaj Słonecznik</button>
        <button onClick={() => dispatch(add(items[1]))}> Dodaj Ziemniak</button>
        <button onClick={() => dispatch(removeItems())}> Kasuj wszystkie</button>
        <button onClick={() => dispatch(remove("Słonecznik"))}> Kasuj slonecznik</button>
        <button onClick={() => dispatch(remove("Ziemniak"))}> Kasuj ziemniak</button>
        </>
    )
}

export default Shop;






 


