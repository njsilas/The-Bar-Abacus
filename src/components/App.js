import React from 'react';
import  Router  from './Router'
import LiquorsContainer from './LiquorsContainer'
import MixersContainer from './MixersContainer'
const App = () => {
    return (
        <div>
           <LiquorsContainer />
            <MixersContainer />
            <Router />
           
        </div>
    );
};

export default App;