import React from "react" ;
import { NavLink } from "react-router-dom"

export const NavOptions = () => {
    return (
        <>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/mixers"> Mixers </NavLink>
        <NavLink to="/liquors"> Liquors </NavLink>
        <NavLink to="/cocktails"> Cocktails</NavLink>
        </>
    )
}
