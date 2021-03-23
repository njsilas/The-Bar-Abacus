import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchLiquor } from '../../actions/liquorsActions'
import LiquorsForm from './LiquorsForm'
import LiquorsList from './LiquorsList';
class LiquorsContainer extends Component {
   componentDidMount() {
       this.props.fetchLiquor()
   }
    render() {
        return (
            <div>
           <LiquorsForm />
            <LiquorsList />
            </div>
        );
    }
}

export default connect(null, { fetchLiquor }) (LiquorsContainer);