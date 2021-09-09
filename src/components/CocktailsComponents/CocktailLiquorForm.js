import React, { Component } from 'react';
import { connect } from 'react-redux'
import { storeIng } from '../../actions/cocktailActions'
import { Button, Form, Col, Row, FormGroup, Label, Input } from 'reactstrap';
class CocktailLiquorForm extends Component {
    state = {
        ingname: '',
        ppo: 0,
        oz: 0
    }
    findliquorid = id => {
        if(id === 0) {
            return({ingname: '', ppo: 0})
        }
        else {
            const spiritneeded = this.props.liquors.filter(liquor => liquor.id === id)
            return(spiritneeded[0])
        }
        
      
      } 
    handleLiquor = e => {
        const liqid = parseInt(e.target.value)
        const liquor = this.findliquorid(liqid)
        this.setState({
            ingname: liquor.brand,
            ppo: parseFloat(liquor.ppo),
            
        })
    }
    ounceChange = e => {
        
       
        const value = e.target.value
        
        this.setState({
            oz: parseFloat(value)
            
        })
    } 
    submitLiquor = e => {
        e.preventDefault()
        const agg = {...this.state, ozppo: parseFloat(this.state.oz*this.state.ppo)}
       this.props.storeIng(agg)
    }  
    render() {
      const formStyle = {
        margin: '15px',
        borderStyle: "inset"
      }
        return (
            
            <Form onSubmit={this.submitLiquor} style={formStyle} className="text-center" >
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="addliquor" >Select a Spirit</Label>
                    <Input type="select" name="Liquors" onChange={this.handleLiquor}>
                    <option key="default" value={0} ></option>
                   {this.props.liquors.map(liquor => <option key={liquor.id} value={liquor.id} name={liquor.brand}> {liquor.brand}</option>)}
                </Input>
                 </FormGroup>
               </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="addSpirit">OZ</Label>
                    <Input type="number" value={this.state.oz} onChange={this.ounceChange} name="ounces" step="0.25" min="0"/>
                    <Button type="submit" value="Add Spirit">Add Spirit</Button>
                  </FormGroup>
                </Col>
              </Row>
            </Form>

               
            
        );
    }
  
}
const mapStateToProps = state => {
    return {liquors: state.liquors}
    }

export default connect(mapStateToProps, { storeIng })(CocktailLiquorForm);