import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addMixer } from '../../actions/mixersActions'
import { Button, Form, Col, Row, FormGroup, Label, Input } from 'reactstrap';
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
          const formStyle = {
            margin: '15px',
            border: '2px solid black'
          }
            return (
                <Form onSubmit={this.handleSubmit} style={formStyle}>
                <Row form>
                   <Col md={4}>
                     <FormGroup>
                       <Label>Name:</Label>
                       <Input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                     </FormGroup>
                   </Col>
                   <Col md={4}>
                     <FormGroup>
                       <Label>Type:</Label>
                       <Input type='text' value={this.state.mixer_type} onChange={this.handleChange} name="mixer_type"/>
                     </FormGroup>
                   </Col>
                   <Col md={4}>
                     <FormGroup>
                       <Label>Ingredients:</Label>
                       <Input type='text' value={this.state.image} onChange={this.handleChange} name="image"/>
                     </FormGroup>
                   </Col>
                   <Col md={4}>
                     <FormGroup>
                       <Label>Price:</Label>
                       <Input type='number' value={this.state.price} onChange={this.handleChange} name="price" min="0.00" step="0.01"/>
                     </FormGroup>
                   </Col>
                   <Col md={4}>
                    <FormGroup>
                       <Label>Yield (oz):</Label>
                       <Input type='number' value={this.state.yield} onChange={this.handleChange} name="yield"/>
                     </FormGroup>
                   </Col>
                   <Col md={4}>
                       <FormGroup>
                       <Button type='submit' value="Store New Mixer">Store New Mixer</Button>
                       </FormGroup>
                   </Col>
                 </Row>
                 </Form>
        );
    }
}
export default connect(null, {addMixer})(MixersForm);
