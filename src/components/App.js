import React from 'react';
import  Router  from './Router'
import {NavOptions} from './NavBar'
import { fetchLiquor } from '../actions/liquorsActions'
import { fetchMixer } from '../actions/mixersActions'
import { connect } from 'react-redux';
class App extends React.Component {
  componentDidMount() {
      this.props.fetchMixer()
      this.props.fetchLiquor()
  }
    render(){
        
        return (
            <div >
                <NavOptions />
                <Router />
                
            </div>
        );
    };
   
}
const mapDispatchToProps = dispatch => {
    return {
        fetchMixer: () => dispatch(fetchMixer()),
        fetchLiquor: () => dispatch(fetchLiquor())
    }
  }

export default connect(null, mapDispatchToProps)(App);