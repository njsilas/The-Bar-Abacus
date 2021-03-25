
import React, { Component} from 'react';
import { connect } from 'react-redux' 
import LiquorsDropdown from '../LiquorsComponents/LiquorsDropdown'
import MixerCocktail from '../MixersComponents/MixerCocktail'
import CocktailLiquorForm from './CocktailLiquorForm'
import CocktailMixerForm from './CocktailMixerForm'
import  CocktailDisplay  from "./CocktailDisplay"
import CocktailAccumulator from './CocktailAccumulator'
class CocktailCalculator extends Component {

state = {
    name: "",
    margin: 0,
    price: 0,
    cocktail: this.props.cocktail
}
    render() {
     // let liquorsList = [];
      //this.props.liquors.forEach(({id, brand, ppo }) => liquorsList.push({id, brand, ppo}))
      //let uniqueLiquor = [...new Set(liquorsList.map(liquor => liquor.id, liquor.brand, liquor.ppo ))]
      //let mixersList = []
   let sum = this.props.cocktail.reduce(
    (accumulator, drink) => accumulator + drink.ozppo
    ,0
)
console.log(this.state)
        return (
            <div>
               <CocktailLiquorForm />
                <CocktailMixerForm />
                <form>
                    <label>Cocktail:</label>
                </form>
                <CocktailDisplay cocktail={this.props.cocktail} />
                {sum}
            </div>
        );
    }
}
const addupDrink = ( { cocktail} ) => {
    if(cocktail === undefined ){
        return 0
    }
    else {
        return cocktail.reduce((total, ing) => ({oz: total + ing.oz }), 0)

    }
}
const mapStateToProps = state => {
   return {
    cocktail: state.cocktail
    } 
}
export default connect(mapStateToProps)(CocktailCalculator);