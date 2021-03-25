
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
    price: 0,
    margin: 0
}
handleChange = e => {
    const {name, value} = e.target
  
    this.setState({
        [name]: value
    })
}
priceChange = e => {
    const {name, value} = e.target
    this.setState({
        [name]: parseFloat(value)
        
       })  
}
setMargin = e => {
    e.preventDefault()
    
}
marginForDisplay = (tot, price) => {
    if(price === 0 || tot === 0) {
        return "0%"
    }else {
        const roundednum = (tot / price) * 100
        const addedper = roundednum.toFixed(2)+"%"
        return addedper
    }
    
}
    render() {
     // let liquorsList = [];
      //this.props.liquors.forEach(({id, brand, ppo }) => liquorsList.push({id, brand, ppo}))
      //let uniqueLiquor = [...new Set(liquorsList.map(liquor => liquor.id, liquor.brand, liquor.ppo ))]
      //let mixersList = []
   let rawsum = this.props.cocktail.reduce(
    (accumulator, drink) => accumulator + drink.ozppo
    ,0
)
let sum = "$" + rawsum.toFixed(2)
let margin = this.marginForDisplay(rawsum, this.state.price)

   
console.log(this.state)
        return (
            <div>
               <CocktailLiquorForm />
                <CocktailMixerForm />
                <form onSubmit={this.setMargin}>
                    <label>Cocktail Name:</label>
                    <input type="text" name="name" onChange={this.handleChange}></input>
                    <label>Potential Price</label>
                    <input type="number" name="price" onChange={this.priceChange}></input>
                    <input type="submit" value="check price"></input>
                </form>
                <CocktailDisplay cocktail={this.props.cocktail} margin={margin} sum={sum}/>
                <h1>{this.state.name}</h1>
             
                <br></br>
              
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