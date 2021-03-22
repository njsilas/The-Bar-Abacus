
import React, { Component, useState } from 'react';
import { connect } from 'react-redux' 
class CocktailCalculator extends Component {
    state = {

    }
    addNextForm = e => {
        console.log(e.target)
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
    mixers: state.mixers
    }
}
export default connect(mapStateToProps)(CocktailCalculator);