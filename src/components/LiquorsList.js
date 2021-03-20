import React from 'react';
import { connect } from 'react-redux'
const LiquorsList = ({ liquors }) => {
    return (
        <div>
            {liquors.map(liquor => <ul><li key={liquors.id}> {liquor.name}</li> </ul>)}
        </div>
    );
};
const mapStateToProps = state => {
return {liquors: state.liquors}
}
export default connect(mapStateToProps)(LiquorsList);