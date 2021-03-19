import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLiquor } from '../actions/liquorsActions'
import LiquorsFrom from './LiquorsFrom'
class LiquorsContainer extends Component {
   componentDidMount() {
       this.props.fetchLiquor()
   }
    render() {
        return (
            <div>
               <LiquorsFrom />
            </div>
        );
    }
}

export default connect(null, { fetchLiquor }) (LiquorsContainer);