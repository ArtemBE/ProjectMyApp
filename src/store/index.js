import { createStore } from "redux";
/* import access from '../data/product/Access';
import audio from '../data/product/Audio';
import laptop from '../data/product/Laptop'; */
import phone from '../data/product/Phone';
/* import tablet from '../data/product/Tablet';
import variants from "../scripts/Variants"; */
import { composeWithDevTools } from 'redux-devtools-extension';
import matchFilter from "../scripts/match";


const defaultStateProducts = {
    priceFloor: 3990,
    priceCeiling: 139990,
    characteristics: ['color', 'memory', 'producer'],
    currentCategory: phone,
    choise: {
        memory: [],
        producer: [],
        color: [],
        type: [],
    },
    productPage: 1,
}

const defaultState = {
    ...defaultStateProducts,
    doc: document,
    basket: new Map(),
    fullCard: false,
    scroll: 0,
}
const reducer = function(state = defaultState, act){
    switch(act.type){
        case 'changePriceFloor':
            console.log('change f'); 
            return {...state, priceFloor: act.payload, productPage: 1}
        case 'changePriceСeiling':
            console.log('change c'); 
            return {...state, priceCeiling: act.payload, productPage: 1}
        case 'addVariant':
            let c = act.payload.char;
            let v = act.payload.variant;
            if(state.choise[c].includes(v)) return state;
            let res = {...state, choise: {...state.choise, [c]: state.choise[c].concat(v)}, productPage: 1}
            console.log(res.choise.color);
            return res;
        case 'removeVariant':
            let c1 = act.payload.char;
            let v1 = act.payload.variant;
            return  {...state, choise: {...state.choise, [c1]: state.choise[c1].filter(item=>item!==v1)}, productPage: 1}
        case 'changeCurrentCategory':
            return {...state, currentCategory: act.payload, choise: {
                memory: [],
                producer: [],
                color: [],
                type: [],
            },}
        case 'changePage':
            if(state.productPage<2 && act.payload<0) return state;
            if(state.productPage>=
                Math.ceil(state
                    .currentCategory
                    .filter(item=>matchFilter(item, state.choise, {
                        floor: state.priceFloor,
                        ceiling: state.priceCeiling,
                    }))
                    .length/6)
                &&act.payload>0) return state; 
            return {...state, productPage: state.productPage + act.payload}
        case 'to1stPage':
            return {...state, productPage: 1}
        case 'setDefaultState':
            return {...state, ...defaultStateProducts};
        case 'addProduct':
            console.log(state.basket.get(act.payload));
            return (
                state.basket.has(act.payload)?
                {...state, basket: state.basket.set(act.payload, state.basket.get(act.payload)+1)}:
                {...state, basket: state.basket.set(act.payload, 1)}
            )
        case 'removeProduct':
            console.log(state.basket.get(act.payload));
            if(state.basket.get(act.payload)===1) state.basket.delete(act.payload);
            return (
                state.basket.get(act.payload)>1?
                {...state, basket: state.basket.set(act.payload, state.basket.get(act.payload)-1)}:
                {...state, basket: state.basket}
            ) 
        case 'openCard':
            console.log('scr1 ' + window.pageYOffset);
            return {...state, fullCard: act.payload, scroll: window.pageYOffset};
        case 'closeCard':
            return {...state, fullCard: false};
        default:
            //console.log('default'); 
            return state;
    }
}
const store = createStore(reducer, composeWithDevTools());
export default store;