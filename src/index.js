import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/Index'
import reduxThunk from 'redux-thunk'

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'


const store = createStore(
    reducers,
    {},/*estado inciial*/
    applyMiddleware(reduxThunk)
)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));


