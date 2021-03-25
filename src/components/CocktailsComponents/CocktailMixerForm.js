import React, { Component } from 'react';
import { connect } from 'react-redux'
import MixerDropdown from '../MixersComponents/MixerDropdown'
import { storeIng } from '../../actions/cocktailActions'
class CocktailMixerForm extends Component {
  
        state = {
            ingname: '',
            ppo: 0,
            oz: 0
        } 
        findMixerId = id => {
            if(id === 0) {
                return({ingname: '', ppo: 0})
            }
            else {
                const mixerneeded = this.props.mixers.filter(mixer => mixer.id === id)
                return(mixerneeded[0])
            }
            
          
          } 
          handleMixer = e => {
            const mixid = parseInt(e.target.value)
            const mixer = this.findMixerId(mixid)
            this.setState({
                ingname: mixer.name,
                ppo: parseFloat(mixer.ppo)
            })
        }
        ounceChange = e => {
        
       
            const value = e.target.value
            
            this.setState({
                oz: parseFloat(value)
            })
        } 
        submitMixer = e => {
            e.preventDefault()
        const agg = {...this.state, ozppo: parseFloat(this.state.oz*this.state.ppo)}
       this.props.storeIng(agg)
        }  
        render() {
            return (
              <div>
            <form onSubmit={this.submitMixer}>
            <label for="addmixer">Add Mixer:</label>
                <select name="Mixers" onChange={this.handleMixer}>
                    <option key="default" value={0} ></option>
                <MixerDropdown />
                </select>
                <label for="addMixer">Oz:</label>
                <input type="number" value={this.state.oz} onChange={this.ounceChange} name="ounces" step="0.25"></input>
                <input type="submit" value="Add Mixer"></input>
            </form>

                
              </div>
        );
    }
}
const mapStateToProps = state => {
    return {mixers: state.mixers}
    }
export default connect(mapStateToProps, { storeIng })  (CocktailMixerForm);