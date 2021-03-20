import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { fetchLiquor } from '../actions/liquorsActions'
import LiquorsForm from './LiquorsForm'
import LiquorsList from './LiquorsList';
class LiquorsContainer extends Component {
   componentDidMount() {
       this.props.fetchLiquor()
   }
    render() {
        return (
            <div>
            liquor
               
            </div>
        );
    }
}
//
export default connect(null, { fetchLiquor }) (LiquorsContainer);