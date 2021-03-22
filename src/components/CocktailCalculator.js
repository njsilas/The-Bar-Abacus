
import React, { Component} from 'react';
import { connect } from 'react-redux' 
import LiquorsDropdown from './LiquorsDropdown'
import MixerCocktail from './MixerCocktail'
class CocktailCalculator extends Component {
 state = {
     cocktailIng: [],
     cocktailppo: []

 }
 
    addToDrink = e => {
        e.preventDefault()
        
        console.log(e.target.dataset)
    }
    render() {
     // let liquorsList = [];
      //this.props.liquors.forEach(({id, brand, ppo }) => liquorsList.push({id, brand, ppo}))
      //let uniqueLiquor = [...new Set(liquorsList.map(liquor => liquor.id, liquor.brand, liquor.ppo ))]
      //let mixersList = []
       
       
        return (
            <div>
                
      
            <MixerCocktail />

               
                <select name="liquorselect" onChange={this.addToDrink}>
                <option value=""></option>
                  <LiquorsDropdown />
                </select>
           <form onSubmit={this.addToDrink}>
               <label>Spirits:</label>
               
                <input type="number"></input>
                <input type="submit" value="add to drink" />
           </form>
               
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