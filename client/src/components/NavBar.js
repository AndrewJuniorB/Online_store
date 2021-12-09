import React, { useContext } from 'react';
import { Context } from '../index.js';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts.js';
import {observer} from 'mobx-react-lite';
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';


const NavBar = observer(() => {
  const { user } = useContext(Context);
  let history =  useNavigate();
  return (

    <Navbar bg="primary" variant="dark">
      <Container>
      <NavLink className='mr-auto' style={{ color: 'white' }} to={SHOP_ROUTE}>Internet Store</NavLink>
        {user.isAuth ?

        <Nav  style={{ color: 'white' }}>
        <Button
          variant={'outline-light'}
          onClick={() => history(ADMIN_ROUTE)}
          >
            Admin Page
        </Button>
        <Button
          variant={'outline-light'}
          onClick={() => history(LOGIN_ROUTE)}
          className='ms-2'
          >
            Log out
        </Button>
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