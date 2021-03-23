import React, { Component } from 'react';
import { fetchMixer } from '../actions/mixersActions'
import { fetchLiquor } from '../actions/liquorsActions'
import { connect } from 'react-redux'
import  CocktailCalculator  from './CocktailCalculator'

class CocktailsComponent extends Component {
  
    render() {
       
        return (
            <div>
                <CocktailCalculator />
                
            </div>
        );
    }
}





export default connect(null)(CocktailsComponent);