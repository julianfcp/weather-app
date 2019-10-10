import { SET_CITY } from "./../actions";

export const city = (state, action) => {
    switch (action.type) {
        case SET_CITY:
            // ...state signigica el spread operator.
            // en este caso se agrega la variable city al state (..state)
            return { ...state, city: action.payload }
        default:
            return state;
    }
};