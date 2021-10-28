import React from 'react';
import { connect } from 'react-redux'
import { removeLiq } from '../../actions/liquorsActions';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
const LiquorsList = ({ liquors }) => {
   
    return (
        <div class="snameofstyleiwant">
           {liquors.map(liquor => <ListGroup key="liquormap"><ListGroupItem key={liquor.id}> {liquor.brand} @ ${liquor.ppo}/oz <Button onSubmit= {removeLiq(liquor)} ></Button></ListGroupItem> </ListGroup>)}
        </div>
    );
};
const mapStateToProps = state => {
return {liquors: state.liquors}
}
export default connect(mapStateToProps)(LiquorsList);