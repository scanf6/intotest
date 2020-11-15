const successReducer = (state = true, action) => {
    switch(action.type) {
        case 'SUCCESS':
            return true;
        case 'FAIL':
            return false;
        default:
            return state;
    }
}

export default successReducer;