import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App/App';
import store from './redux/store';

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('app'));

if (module.hot) {
    module.hot.accept('./App/App', () => {
        const App = require('./App/App').default;
        renderDom(App);
    })
}
