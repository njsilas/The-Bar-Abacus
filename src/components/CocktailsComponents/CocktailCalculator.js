
import React, { Component} from 'react';
import { connect } from 'react-redux' 
import LiquorsDropdown from '../LiquorsComponents/LiquorsDropdown'
import MixerCocktail from '../MixersComponents/MixerCocktail'
class CocktailCalculator extends Component {
 
 handleChange = e => {
    const {name, value} = e.target
    this.setState({
     [name]: value
    })
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
               
                <p></p>
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