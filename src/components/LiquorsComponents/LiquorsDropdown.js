import React from 'react';
import { connect } from 'react-redux'
const LiquorsDropdown = ({ liquors }) => {
   
    return (
       
           liquors.map(liquor => <option key={liquor.id} value={liquor.id} name={liquor.brand}> {liquor.brand}</option> )
       
    );
};
const mapStateToProps = state => {
return {liquors: state.liquors}
}
export default connect(mapStateToProps)(LiquorsDropdown);