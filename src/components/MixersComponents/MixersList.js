import React from 'react';
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
const MixersList = ({ mixers }) => {
   
    return (
        <>
           {mixers.map(mixer => <ListGroup key="MixersList"><ListGroupItem key={mixer.id}> {mixer.name} @ ${mixer.ppo}/oz</ListGroupItem> </ListGroup>)}
        </>
    );
};
const mapStateToProps = state => {
return {mixers: state.mixers}
}
export default connect(mapStateToProps)(MixersList);