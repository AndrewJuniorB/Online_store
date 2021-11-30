import React from 'react';
import {Container, Form} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {REGISTRATION_ROUTE, LOGIN_ROUTE} from '../utils/consts.js';
import {NavLink, useLocation} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {observer} from 'mobx-react-lite';
import Row from 'react-bootstrap/Row';


const Auth = observer(() => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log('LOCATION',location);

  return (
<Container className='d-flex justify-content-center align-items-center'
style={{height: window.innerHeight - 54}}>
  <Card style={{width: 600}} className='p-5'>
    <h2 className='m-auto'>{isLogin ? 'Authoriaztion' : 'Registration'}</h2>
    <Form className='d-flex flex-column'>
      <Form.Control
        className='mt-3'
        placeholder='Please enter your e-mail...'
      />
      <Form.Control
        className='mt-3'
        placeholder='Please enter your Password...'
      />

      <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
          {isLogin ?
            <div>
              Need Account? <NavLink to={REGISTRATION_ROUTE}> Sign In </NavLink>
            </div>
            :
            <div>
              You have an account? <NavLink to={LOGIN_ROUTE}> Log In </NavLink>
            </div>
          }
          <Button className='mt-3'
            variant={'outline-primary'}>
              {isLogin ? 'Login' : 'Sign In'}
          </Button>

      </Row>
    </Form>
  </Card>
</Container>
  );
});

export default Auth;