
import React from 'react';

import Header from '../../components/header/Header';
import HomeApp from '../../home-app/HomeApp';

import './App.scss';

class App extends React.Component {

    render() {

        return (
            <div className="app">
                <Header />
                <HomeApp />
            </div>
        );
    }
}

export default App;
