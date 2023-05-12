import { Link } from "react-router-dom";
import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

import { FaPizzaSlice } from 'react-icons/fa';
import { formatPrice } from "../helpers";

const menus = [
    {label:"Home", path: '/'},
    {label:"Menu", path: '/menu'},
    {label:"About", path: '/about'},
    {label:"Contact Us", path: '/contact-us'},
    {label:"Book A Party", path: '/bookaparty'}

];
class NavBar extends Component {

  static propTypes = {
    orderTotal: Proptypes.number
  }

render () {
  return (

    <div className="navbar navbar-expand-lg bg-white shadow py-3 sticky-top">
      <div className="container">
      <div className="app-header-logo">
          <Link to='/'>
          <img 
          className="navbar-brand p-0"
          src = "cheekies.png"
          alt="pizza"
          />
          </Link>
      </div>
        <div>
        <ul className="main-menu">
          {menus.map((item)=> <li>
          <Link to={item.path}>{item.label}</Link>
          </li>)}
        </ul>
        </div>
  
      <div>
        <Menu fixed="top" borderless id ='navbar'>
        <Menu.Item id='navbar-total' position='right'>
            <FaPizzaSlice className='cart'/>
            {formatPrice(this.props.orderTotal)}
            {this.props.children}
        </Menu.Item>
        </Menu>
      </div>
      </div>
    </div>
  )
}
}

export default NavBar
