import React from 'react';
import { connect } from 'react-redux'
const MixersList = ({ mixers }) => {
   
    return (
        <div>
           {mixers.map(mixer => <ul><li key={mixer.id}> {mixer.name}</li> </ul>)}
        </div>
    );
};
const mapStateToProps = state => {
return {mixers: state.mixers}
}
export default connect(mapStateToProps)(MixersList);