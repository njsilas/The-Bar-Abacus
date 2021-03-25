import React from 'react';

const CocktailAccumulator = ({cocktailAcc}) => {
    return (
        <div>
            test
        </div>
    );
};
const addupDrink = ({ cocktail }) => {
    if(cocktail.length === 0){
        return 0
    }
    else {
        return cocktail.reduce((total, ing) => ({oz: total.oz + ing.oz }), 0)

    }
}
export default CocktailAccumulator;