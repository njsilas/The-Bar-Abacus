import React from 'react';

const CocktailDisplay = ({cocktail}) => {
    return (
        <div>
           {cocktail.map(cocktail => <ul><li>{cocktail.oz} OZ of{cocktail.ingname} @ {cocktail.ppo}</li></ul>)}
        </div>
    );
};

export default CocktailDisplay;