import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import Home from '../components/Home'
import LiquorsList from './LiquorsList'
import MixersContainer from './MixersContainer'
import About from '../components/About'
import LiquorsContainer from './LiquorsContainer';
class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/liquors' component={LiquorsList} />
                    <Route exact path='/mixers' component={MixersContainer} />
                    
                </Switch>
            </div>
        );
    }
}

export default Router;