
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMixer } from '../actions/mixersActions'
import MixersFrom from './MixersForm'
class MixersContainer extends Component {
    componentDidMount() {
        this.props.fetchMixer()
    }
    render() {
        return (
            <div>
                <MixersFrom />
            </div>
        );
    }
}

export default connect(null, { fetchMixer }) (MixersContainer);