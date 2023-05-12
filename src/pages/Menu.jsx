import React from 'react';
import { Link  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import PizzaContainer from '../components/PizzaContainer';


const Menu = (props) => (
  <div className='menu-bar'>
    <div order={props.order} orderTotal={props.orderTotal}>
      {props.orderTotal > 0 && <Button as={Link} to='/cart' color='teal' id='menu-checkout-btn'>Checkout</Button>}
    </div>
    <div className='page-container'>
      <h1 className='page-header'>MENU</h1>
      <div textAlign='center' className='menu-free-banner'>
        <p className='menu-banner-text'>Free delivery for orders over ₱550</p>
      </div>
      <div className='menu-pizza-container'>
          <PizzaContainer addToOrder={props.addToOrder} />
      </div>
    </div>
  </div>
);

Menu.propTypes = {
  order: PropTypes.array,
  orderTotal: PropTypes.number,
  addToOrder: PropTypes.func.isRequired
};

export default Menu;
