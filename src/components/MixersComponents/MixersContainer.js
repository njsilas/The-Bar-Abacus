
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMixer } from '../../actions/mixersActions'
import MixersForm from '../MixersForm'
import MixersList from '../MixersList'
class MixersContainer extends Component {
    componentDidMount() {
        this.props.fetchMixer()
    }
    render() {
        return (
            <div>
                <MixersForm />
                <MixersList />
            </div>
        );
    }
}

export default connect(null, { fetchMixer }) (MixersContainer);