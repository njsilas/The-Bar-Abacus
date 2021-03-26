import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addLiq } from '../../actions/liquorsActions'
import { Button, Form, Col, Row, FormGroup, Label, Input } from 'reactstrap';
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
   handleSubmit = e => {
    e.preventDefault()
    this.props.addLiq(this.state)
   }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
               <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label>Brand:</Label>
                      <Input type='text' value={this.state.brand} onChange={this.handleChange} name="brand"/>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label>Type:</Label>
                      <Input type='text' value={this.state.spirit_type} onChange={this.handleChange} name="spirit_type"/>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label>Image Link:</Label>
                      <Input type='text' value={this.state.image} onChange={this.handleChange} name="image"/>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label>Price:</Label>
                      <Input type='number' value={this.state.price} onChange={this.handleChange} name="price" step="0.01" min="0.01"/>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                   <FormGroup>
                      <Label>Seller:</Label>
                      <Input type='text' value={this.state.seller} onChange={this.handleChange} name="seller"/>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                   <FormGroup>
                      <Label>Size (ml):</Label>
                      <Input type='number' value={this.state.quantity} onChange={this.handleChange} name="quantity" min="0"/>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                   <FormGroup>
                      <Label>Code:</Label>
                      <Input type='number' value={this.state.code} onChange={this.handleChange} name="code"/>
                    </FormGroup>
                   
                  </Col>
                  <Col md={4}>
                      <FormGroup>
                      <Button type='submit' value="Store New Spirit">Store New Spirit</Button>
                      </FormGroup>
                  </Col>
                </Row>
              
                </Form>
          
        );
    }
}

export default connect(null, {addLiq})(LiquorsFrom);
        