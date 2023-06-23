import { useReducer } from "react";
import "./Shop.css"

////reducer

function reducer(state, action){
    
    switch(action.type){
    
    case "ADD_ITEM": 
    const itemInCart = state.find((item) => item.id === action.payload.id);
    if(itemInCart) {
        console.log(action.payload.id)
        const tempArray = state;
        tempArray[action.payload.id].count+=1;

        console.log('temp',tempArray);
        return state
    };
    if(!itemInCart) return [...state, action.payload];
    return

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
        count: 1,
        price: 20
    },
    {
        name: "Banany",
        id: 2,
        count: 1,
        price: 20
    },

];

function Shop() {

    const [state, dispatch] = useReducer(reducer, []);
    console.log(state);
    
    return (
        <div className="shop-container">
        <h1>Shop</h1>
        <div className="list-container">
            <ul className="list">
                {items.map((el, index )=> <li key={el.id}>{el.name}
                <button className="list__btn-add" onClick={() => dispatch(add(items[index]))}>
                    Dodaj
                </button>
                </li>)}
            </ul>
            

        </div>
        
        
        <h2>Mój koszyk:</h2>
            <div className="shopping-cart-container">
                <ul className="cart">
                    {state?.map(({name, id, count, price}, index) => {
                        return(
                            <li key={id}>{name} sztuk: {count} cena: {price} PLN
                                 <button className="cart__btn-remove" onClick={() => dispatch(remove(name))}> Kasuj {name}</button>
                            </li>
                        )
                    })}
                </ul>
                {(state.length > 0)?<button className="cart__btn-remove"onClick={() => dispatch(removeItems())}>Kasuj wszystko!!!</button>:null}
            </div>

        </div>
    )
}

export default Shop;






 


