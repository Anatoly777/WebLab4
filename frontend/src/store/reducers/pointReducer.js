const defaultState = {
    x: "",
    y: "",
    r: "1",
    errorStateX: "",
    errorStateY: "",
    errorStateR: ""
}


export const pointReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "X_CHANGE":
            return {...state, x: action.payload}
        case "Y_CHANGE":
            return {...state, y: action.payload, errorStateY: action.payload >= -3.00 && action.payload <= 3.00 ? "" : "error"}
        case "R_CHANGE":
            return {...state, r: action.payload, errorStateR: action.payload >= -7 && action.payload <= 1 ? "" : "error"}
        default:
            return state;
    }
}