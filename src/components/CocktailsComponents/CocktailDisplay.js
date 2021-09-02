import React from 'react';

const CocktailDisplay = (props) => {
    const {cocktail, margin, sum} = props 
    
    return (
        <div className="text-centered">
           {cocktail.map(cocktail => <ul><li>{cocktail.oz} OZ of {cocktail.ingname} @ {cocktail.ppo}/oz = ${cocktail.ozppo.toFixed(2)}</li></ul>)}
           Cost:{sum} Margin:{margin} 
        </div>
    );
};

export default CocktailDisplay;