export default function reducer(
    state = {
        ingredients: {}
    },
    action
) {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            return { ...state, ingredients: action.ingredients };
        default:
            return state;
    }
}
