import React from 'react';
import {connect} from 'react-redux';
import {clickMe} from '../Actions/addAction'

let Button = ({ click, stateObject, whatsUp }) => (
    <div>
        <h1>{whatsUp}</h1>
        <button onClick={click}>Click me</button>
    </div>
    
)

const mapStateToProps = (state) => ({
    whatsUp:state.say,
    stateObject:state
})
const mapDispatchToProps = (dispatch) =>({
    click:()=>{ dispatch(clickMe())}
})

Button = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)
export default Button;