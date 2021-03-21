import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addMixer } from '../actions/mixersActions'
class MixersForm extends Component {
    state = {
        mixer_type: '',
        name: '',
        price: '',
        yield: '',
        ingreds: ''

    }
    handleChange = e => {
        const {name, value} = e.target
        this.setState({
         [name]: value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.addMixer(this.state)
       }
    render() {
        return (
            <form onSubmit={this.handleSubmit()}>
            <label>Name:</label>
            <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
            <br />
            <label>Type:</label>
            <input type='text' value={this.state.mixer_type} onChange={this.handleChange} name="mixer_type"/>
            <br />
            <label>Ingredients:</label>
            <input type='text' value={this.state.ingreds} onChange={this.handleChange} name="ingreds"/>
            <br />
            <label>Price:</label>
            <input type='number' value={this.state.price} onChange={this.handleChange} name="price"/>
            <br />
            <label>Yield (oz):</label>
            <input type='number' value={this.state.yield} onChange={this.handleChange} name="yield"/>
            <br />
            <input type='submit' value="Store New Mixer" />
        </form>
        );
    }
}

export default connect(null, {addMixer})(MixersForm);
