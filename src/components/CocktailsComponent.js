import React, { Component } from 'react';
import { fetchMixer } from '../actions/mixersActions'
import { fetchLiquor } from '../actions/liquorsActions'
import { connect } from 'react-redux'
import  CocktailCalculator  from './CocktailCalculator'
import liquorDropdown from './LiquorsDropdown'
class CocktailsComponent extends Component {
    componentDidMount() {
        this.props.fetchLiquor()
        this.props.fetchMixer()
    }
    render() {
       
        return (
            <div>
                <CocktailCalculator />
                
            </div>
        );
    }
}
const mapStateToProps = state => {
return {
liquors: state.Liquors,
mixers: state.mixers
}

}
const mapDispatchToProps = dispatch => {
    return {
        fetchLiquor: () => dispatch(fetchLiquor()),
        fetchMixer: () => dispatch(fetchMixer())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CocktailsComponent);