const initialSate = 5;

const multiDiv = (state = initialSate, action) => {
    switch (action.type) {
        case "MULTIPLE":
            return state * action.payload;
        case "DIVIDE":
            return state / action.payload;
        default:
            return state;
    }
}
export default multiDiv;