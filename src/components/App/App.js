import React, { Component } from 'react';
import getRouter from '../../router/router';

class App extends Component {
    render() {
        return (
            <div>
                {getRouter()}
            </div>
        );
    }
}

export default App;