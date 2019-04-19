import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import clickReducer from './Reducer/clickReducer';
import ClickComponent from './Components/clickComponent';
import DisplayComponent from './Components/displayComponent';

const store = createStore(clickReducer)

render(
    <Provider store={store}>
    <ClickComponent/>
    <DisplayComponent/>
    </Provider>,
    document.getElementById('root')
)



