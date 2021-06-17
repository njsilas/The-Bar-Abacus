import React, { Component } from 'react';
import { connect } from 'react-redux'
import { storeIng } from '../../actions/cocktailActions'
import { Button, Form, Col, Row, FormGroup, Label, Input, FormText } from 'reactstrap';
class CocktailMixerForm extends Component {
  
        state = {
            ingname: '',
            ppo: 0,
            oz: 0
        } 
        findMixerId = id => {
            if(id === 0) {
                return({ingname: '', ppo: 0})
            }
            else {
                const mixerneeded = this.props.mixers.filter(mixer => mixer.id === id)
                return(mixerneeded[0])
            }
            
          
          } 
          handleMixer = e => {
            const mixid = parseInt(e.target.value)
            const mixer = this.findMixerId(mixid)
            this.setState({
                ingname: mixer.name,
                ppo: parseFloat(mixer.ppo)
            })
        }
        ounceChange = e => {
        
       
            const value = e.target.value
            
            this.setState({
                oz: parseFloat(value)
            })
        } 
        submitMixer = e => {
            e.preventDefault()
        const agg = {...this.state, ozppo: parseFloat(this.state.oz*this.state.ppo)}
       this.props.storeIng(agg)
        }  
        render() {
            return (
                <>
            <Form onSubmit={this.submitMixer}>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="addmixer">Add Mixer:</Label>
                    <Input type="select" name="Mixers" onChange={this.handleMixer}>
                    <option key="default" value={0} ></option>
                   {this.props.mixers.map(mixer => <option key={mixer.id} name={mixer.name} value={mixer.id} > {mixer.name}</option>)}
                </Input>
                 </FormGroup>
               </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="addSpirit">Oz:</Label>
                    <Input type="number" value={this.state.oz} onChange={this.ounceChange} name="ounces" min="0" step="0.25"/>
                    <Button type="submit" value="Add Mixer">Add Mixer</Button>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
            </>
               
            )
        }
}
const mapStateToProps = state => {
    return {mixers: state.mixers}
    }
export default connect(mapStateToProps, { storeIng })  (CocktailMixerForm);