import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import Home from '../components/home'
import LiquorsContainer from './LiquorsContainer'
import MixersContainer from './MixersContainer'
import About from '../components/About'
class Router extends Component {
    render() {
        return (
            <div>
                <switch>
                    <Route exact path='/' component={home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/liquors' component={LiquorsContainer} />
                    <Route exact path='/mixers' component={MixersContainer} />

                </switch>
            </div>
        );
    }
}

export default Router;