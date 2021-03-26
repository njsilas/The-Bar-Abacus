import React from 'react';
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap';
const LiquorsList = ({ liquors }) => {
   
    return (
        <div>
           {liquors.map(liquor => <ListGroup key="liquormap"><ListGroupItem key={liquor.id}> {liquor.brand} @ ${liquor.ppo}/oz</ListGroupItem> </ListGroup>)}
        </div>
    );
};
const mapStateToProps = state => {
return {liquors: state.liquors}
}
export default connect(mapStateToProps)(LiquorsList);