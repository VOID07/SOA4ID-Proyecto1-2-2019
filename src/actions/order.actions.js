export const addIngredient = (ingredient) => (dispatch, getState) => {
    const ingredients = getState().order.ingredients || {}

    if (ingredients[ingredient]) {
        ingredients[ingredient] = false
    } else {
        ingredients[ingredient] = true
    }
    dispatch({ type: 'ADD_INGREDIENT', ingredients })
}