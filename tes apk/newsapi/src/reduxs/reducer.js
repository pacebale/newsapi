const defaultState = {
    list:[]
}

const loginReducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, list:action.payload}
            default:
            return ``
    }
}
export default loginReducer