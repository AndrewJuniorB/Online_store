import React, { useContext } from 'react';
import { Context } from '../index.js';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts.js';
import {observer} from 'mobx-react-lite';
import Button from "react-bootstrap/Button";


const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (

    <Navbar bg="primary" variant="dark">
      <Container>
      <NavLink className='mr-auto' style={{ color: 'white' }} to={SHOP_ROUTE}>Internet Store</NavLink>
        {user.isAuth ?

        <Nav  style={{ color: 'white' }}>
        <Button variant={'outline-light'}>Admin Page</Button>
        <Button variant={'outline-light'} className='ms-2'>Login</Button>
        </Nav>

        :

        <Nav style={{ color: 'white' }}>
        <Button variant={'outline-light'} onClick={()=>{user.setIsAuth(true)}}>Authoriaztion</Button>
        </Nav>

        }
      </Container>
    </Navbar>

  );
});

export default NavBar;