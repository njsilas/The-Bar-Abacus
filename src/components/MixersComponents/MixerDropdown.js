import React from 'react';
import { connect } from 'react-redux'

const MixersDropdown = ({ mixers }) => {
   return  (
    mixers.map(mixer => <option key={mixer.id} name={mixer.name} value={mixer.id} > {mixer.name}</option>)
   )
};
const mapStateToProps = state => {
return {mixers: state.mixers}
}
export default connect(mapStateToProps)(MixersDropdown);