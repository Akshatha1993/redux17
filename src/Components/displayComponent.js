import React from 'react';
import {connect} from 'react-redux';
import {clickMe} from '../Actions/addAction'

let DisplayComponent = ({ click, stateObject, whatsUp }) =>(
    <div>
       <h1>{whatsUp}</h1>
    </div>
) 
const mapStateToProps = (state) => ({
    whatsUp:state.say,
    stateObject:state
})
const mapDispatchToProps = (dispatch) =>({
    click:()=>{ dispatch(clickMe())}
})

DisplayComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayComponent)
export default DisplayComponent;