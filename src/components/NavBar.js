import React from "react" ;
import { NavLink as RRNavLink } from "react-router-dom"
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap'
import   logo  from '../BA.png'

export const NavOptions = () => {
    console.log(logo)
    return (
        <>
        
        <Nav style ={{backgroundColor: '#343a40'}}>
          <NavItem>
              <img src={logo} width="35px" height="35px"/>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/" style = {{color: '#32cd32'}}> Home </NavLink> 
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/mixers" style = {{color: '#32cd32'}}> Mixers </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/liquors" style = {{color: '#32cd32'}}> Liquors </NavLink> 
          </NavItem>
          <NavItem> 
            <NavLink tag={RRNavLink} to="/cocktails" style = {{color: '#32cd32'}}> Cocktails</NavLink>
          </NavItem>
        </Nav>
        </>
    )
}
