
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMixer } from '../actions/mixersActions'
import mixerFrom from './LiquorsForm'
class MixersContainer extends Component {
    componentDidMount() {
        this.props.fetchMixer()
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default connect(null, { fetchMixer }) (MixersContainer);