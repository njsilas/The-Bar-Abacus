
import React, { Component} from 'react';
import { connect } from 'react-redux' 
import LiquorsDropdown from '../LiquorsComponents/LiquorsDropdown'
import MixerCocktail from '../MixersComponents/MixerCocktail'
import CocktailLiquorForm from './CocktailLiquorForm'
class CocktailCalculator extends Component {

 handleChange = e => {
    const {name, value} = e.target
    this.setState({
     [name]: value
    })
}
findLiquor = (num) => {

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
               <CocktailLiquorForm />
      
            </div>
        );
    }
}

const mapStateToProps = state => {
   return {
    cocktail: state.cocktail
    } 
}
export default connect(mapStateToProps)(CocktailCalculator);