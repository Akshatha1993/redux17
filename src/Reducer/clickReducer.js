const clickReducer = (state = {say:'Click me'}, action)=>{
    switch (action.type){
        case 'ADD_CLICK':
        return {say: 'I Am Clicked'};
        default:
        return state;
    }
};
export default clickReducer;