import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLiquor } from '../../actions/liquorsActions'
import LiquorsForm from './LiquorsForm'
import LiquorsList from './LiquorsList';
class LiquorsContainer extends Component {
  //add input field 

  

    render() {
        return (
            <div >
                <h1>Liquors Available</h1>
           <LiquorsForm />
            <LiquorsList/>
            </div>
        );
    }
}

export default connect(null, { fetchLiquor }) (LiquorsContainer);