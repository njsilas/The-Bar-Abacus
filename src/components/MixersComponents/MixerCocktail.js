import React, { Component } from 'react';
import MixerDropdown from './MixerDropdown'
import { connect } from 'react-redux'
import { fetchMixer } from '../actions/mixersActions'
class MixerCocktail extends Component {
    state = {
        ingred: '',
        ounces: '',
        ppo: ''
    }
    componentDidMount() {
    
        this.props.fetchMixer()
    }
    ounceChange = e => {
    
       
     const {name, value} = e.target
     console.log(this.state)
     this.setState({
         ounces: value
     })
      
    }
    render() {
        return (
            <form onSubmit={this.handleChange}>
                 <label>Mixers:</label>
            <select name="Mixers" onChange={this.handleChange}>
            <MixerDropdown />
              
            </select>
            
            <input type="number" value={this.state.ounces} onChange={this.ounceChange} name="ounces" step="0.25"></input>
            <input type="submit" value="add to drink" />
            
          </form>
        );
    }
}




export default connect(null, {fetchMixer})(MixerCocktail);