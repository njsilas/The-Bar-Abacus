
import React, { Component} from 'react';
import { connect } from 'react-redux' 
import { removeall } from '../../actions/cocktailActions'
import CocktailLiquorForm from './CocktailLiquorForm'
import CocktailMixerForm from './CocktailMixerForm'
import  CocktailDisplay  from "./CocktailDisplay"

import { Button, Form, Col, Row, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
class CocktailCalculator extends Component {

state = {
    name: "",
    price: 0,
    margin: 0

}
handleChange = e => {
    const {name, value} = e.target
  
    this.setState({
        [name]: value
    })
}
priceChange = e => {
    const {name, value} = e.target
    this.setState({
        [name]: parseFloat(value)
        
       })  
}
removedrink = e => {
    
    removeall()
    
}
marginForDisplay = (tot, price) => {
    if(price === 0 || tot === 0) {
        return "0%"
    }else {
        const roundednum = (tot / price) * 100
        const addedper = roundednum.toFixed(2)+"%"
        return addedper
    }
    
}
    render() {
     // let liquorsList = [];
      //this.props.liquors.forEach(({id, brand, ppo }) => liquorsList.push({id, brand, ppo}))
      //let uniqueLiquor = [...new Set(liquorsList.map(liquor => liquor.id, liquor.brand, liquor.ppo ))]
      //let mixersList = []
   let rawsum = this.props.cocktail.reduce(
    (accumulator, drink) => accumulator + drink.ozppo
    ,0
)
let sum = "$" + rawsum.toFixed(2)
let margin = this.marginForDisplay(rawsum, this.state.price)

   

        return (
            <div>
               <CocktailLiquorForm />
                <CocktailMixerForm />
                <Form onSubmit={this.removedrink}>
                <Row form>
                    <Col md={4}>
                    <FormGroup>
                    <Input type="text" name="name" onChange={this.handleChange} placeholder="Type Name Here..."></Input>
                    <Input type="number" name="price" onChange={this.priceChange} placeholder="Menu Price: $" min="0.01" step="0.01"></Input>
                    </FormGroup>
                    <Button type='submit' value="Store New Spirit">Reset Drink</Button>
                    </Col>
                 </Row>
                </Form>
                <h1>{this.state.name}</h1>
                <CocktailDisplay cocktail={this.props.cocktail} margin={margin} sum={sum}/>
                
             
                <br></br>
              
            </div>
        );
    }
}

const mapStateToProps = state => {
   return {
    cocktail: state.cocktail
    } 
}
export default connect(mapStateToProps, { removeall })(CocktailCalculator);