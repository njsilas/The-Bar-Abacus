
import React, { Component, useState } from 'react';
import { connect } from 'react-redux' 
import { firstFilter } from '../actions/cocktailActions'
class CocktailCalculator extends Component {
 
    addNextForm = e => {
        console.log(this.props.cocktail, e.target.value)
       
    }
    render() {
       
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