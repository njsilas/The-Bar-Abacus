
import React, { Component, useState } from 'react';
import { connect } from 'react-redux' 
import { firstFilter } from '../actions/cocktailActions'
class CocktailCalculator extends Component {
 
    addNextForm = e => {
        console.log(this.props.cocktail, e.target.value)
       if(e.target.value == "Mixer") {
           
       }
    }
    render() {
      let liquorsList = [];
      this.props.liquors.forEach(({id, brand, ppo }) => liquorsList.push({id, brand, ppo}))
      let uniqueLiquor = [...new Set(liquorsList.map(liquor => liquor.id, liquor.brand, liquor.ppo ))]
      let mixersList = []

        console.log(firstFilter)
        return (
            <div>
                <select name="Types" id="types" onChange={this.addNextForm}>
                    <option value=""></option>
                    <option value="Mixer">Mixer</option>
                    <option value="Spirit">Spirit</option>
                </select>
                <select name="firstFilter" id="ft">
                    <option value=""></option>
                    <option value="">testing</option>
                </select>
                <input type="number"></input>
                <p>cocktail placement</p>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
    liquors: state.liquors,
    mixers: state.mixers,
    cocktail :state.cocktail
    }
}
export default connect(mapStateToProps)(CocktailCalculator);