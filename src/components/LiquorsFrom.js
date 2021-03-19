import React, { Component } from 'react';

class LiquorsFrom extends Component {
   state = {
       brand: '',
       spirit_type: '',
       image: '',
       price: '',
       seller: '',
       quantity: '',
       code: ''

   }
   handleChange = e => {
       const {name, value} = e.target
       this.setState({
        [name]: value
       })
   }
    render() {
        return (
            <form>
                <label>Brand:</label>
                <input type='text' value={this.state.brand} onChange={this.handleChange} name="brand"/>
                <br />
                <label>Type:</label>
                <input type='text' value={this.state.spirit_type} onChange={this.handleChange} name="spirit_type"/>
                <br />
                <label>Image Link:</label>
                <input type='text' value={this.state.image} onChange={this.handleChange} name="image"/>
                <br />
                <label>Price:</label>
                <input type='number' value={this.state.price} onChange={this.handleChange} name="price"/>
                <br />
                <label>Seller:</label>
                <input type='text' value={this.state.seller} onChange={this.handleChange} name="seller"/>
                <br />
                <label>Size (ml):</label>
                <input type='number' value={this.state.quantity} onChange={this.handleChange} name="quantity"/>
                <br />
                <label>Code:</label>
                <input type='number' value={this.state.code} onChange={this.handleChange} name="code"/>
                <br />
                <input type='submit' value="Store New Spirit" />
            </form>
        );
    }
}

export default LiquorsFrom;
