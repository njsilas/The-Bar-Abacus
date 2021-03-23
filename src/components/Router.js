import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import Home from '../components/Home'
//import LiquorsList from './LiquorsList'
import MixersContainer from './MixersComponents/MixersContainer'
import About from '../components/About'
//import MixersList from './MixersList'
import CocktailsComponent from './CocktailsComponent'
import LiquorsContainer from './LiquorsComponents/LiquorsContainer';
class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/liquors' component={LiquorsContainer} />
                    <Route exact path='/mixers' component={MixersContainer} />
                    <Route exact path='/cocktails' component={CocktailsComponent} />
                </Switch>
            </div>
        );
    }
}

export default Router;