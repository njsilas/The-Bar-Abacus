import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap'
class Home extends Component {
    render() {
        const style = {
            boxSizing: "border-box",
            padding: "10px",
            backgroud: "white"
        }
    
        return (
            <div>
                <Card className="text-center">
                    <CardHeader style= {{fontSize: 40, backgroud: "white"}}> Welcome to The Bar Abacus</CardHeader>
                    <CardBody>
                        <CardText >The Bar Abacus allows you to add liquors and mixers to 
                    your database and mock up drinks with those ingredients. The
                    cocktail creator will display the price of the drink and the margin </CardText>
                    </CardBody>
                </Card>
               
            </div>
        );
    }
}

export default Home;