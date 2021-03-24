import React, { Component } from 'react';
import { connect } from 'react-redux'
import LiquorsDropdown from '../LiquorsComponents/LiquorsDropdown'
import { storeIng } from '../../actions/cocktailActions'
class CocktailLiquorForm extends Component {
    state = {
        ingname: '',
        ppo: 0,
        oz: 0
    }
    findliquorid = id => {
        if(id === 0) {
            return({ingname: '', ppo: 0})
        }
        else {
            const spiritneeded = this.props.liquors.filter(liquor => liquor.id === id)
            return(spiritneeded[0])
        }
        
      
      } 
    handleLiquor = e => {
        const liqid = parseInt(e.target.value)
        const liquor = this.findliquorid(liqid)
        this.setState({
            ingname: liquor.brand,
            ppo: parseFloat(liquor.ppo)
        })
    }
    ounceChange = e => {
        
       
        const value = e.target.value
        
        this.setState({
            oz: parseFloat(value)
        })
    } 
    submitLiquor = e => {
        e.preventDefault()
       this.props.storeIng(this.state)
    }  
    render() {
        
        
        return (
            
            <form onSubmit={this.submitLiquor}>
                <label for="addliquor">Add Spirit:</label>
                <select name="Liquors" onChange={this.handleLiquor}>
                    <option key="default" value={0} ></option>
                <LiquorsDropdown />
                </select>
                <label for="addSpirit">Oz:</label>
                <input type="number" value={this.state.oz} onChange={this.ounceChange} name="ounces" step="0.25"></input>
                <input type="submit" value="Add Spirit"></input>
            </form>

               
            
        );
    }
  
}
const mapStateToProps = state => {
    return {liquors: state.liquors}
    }
  
export default connect(mapStateToProps, { storeIng })(CocktailLiquorForm);