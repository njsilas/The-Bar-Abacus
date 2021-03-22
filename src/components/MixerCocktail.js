import React, { Component } from 'react';
import MixerDropdown from './MixerDropdown'
class MixerCocktail extends Component {
    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            
        })
    }
    render() {
        return (
            <form onSubmit={this.addToDrink}>
                 <label>Mixers:</label>
            <select name="Mixers">
            <MixerDropdown />
              
            </select>
            
            <input type="number"></input>
            <input type="submit" value="add to drink" />
            
          </form>
        );
    }
}

export default MixerCocktail;