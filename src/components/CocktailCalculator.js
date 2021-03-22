
import React, { Component, useState } from 'react';
import { connect } from 'react-redux' 
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
                <select name=""
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