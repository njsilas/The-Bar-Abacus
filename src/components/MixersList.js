import React from 'react';
import { connect } from 'react-redux'
//import MixersForm from './MixersForm'
const MixersList = ({ mixers }) => {
   
    return (
        <>
           
           {mixers.map(mixer => <ul key="MixersList"><li key={mixer.id}> {mixer.name}</li> </ul>)}
        </>
    );
};
const mapStateToProps = state => {
return {mixers: state.mixers}
}
export default connect(mapStateToProps)(MixersList);