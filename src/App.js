import React, {Component} from 'react';
import Routes from './containers/Routes';
import {BrowserRouter as Router} from 'react-router-dom'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        }
    }

    getItem = (item) => {
        this.setState({
            item
        });
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <Routes {...this.props}/>
                </div>
            </Router>

        );
    }
}

export default App;
