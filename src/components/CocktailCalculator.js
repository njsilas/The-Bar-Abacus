
import React, { Component, useState } from 'react';
import { connect } from 'react-redux' 
class CocktailCalculator extends Component {
 
    addNextForm = e => {
     
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <select name="Types" id="types" onChange={this.addNextForm()}>
                    <option value=""></option>
                    <option value="Mixer">Mixer</option>
                    <option value="Spirit">Spirit</option>
                </select>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
    liquors: state.liquors,
    mixers: state.mixers,
   cocktail: state.cocktail
    }
}
export default connect(mapStateToProps)(CocktailCalculator);