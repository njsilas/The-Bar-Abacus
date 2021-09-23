
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MixersForm from './MixersForm'
import MixersList from './MixersList'
class MixersContainer extends Component {
    render() {
        return (
            <div>
                <h1>Mixers Available</h1>
                <MixersForm />
                <MixersList />
            </div>
        );
    }
}

export default connect(null) (MixersContainer);