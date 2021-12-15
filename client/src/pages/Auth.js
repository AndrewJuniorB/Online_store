import React, {useState, useContext} from 'react';
import {Container, Form} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from '../utils/consts.js';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {observer} from 'mobx-react-lite';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import {registration, login} from '../http/userAPI.js';
import { Context } from '../index.js';



const Auth = observer(() => {
  const {user} = useContext(Context);
  const location = useLocation();
  const history = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  // console.log('LOCATION',location);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
        if (isLogin) {
          data = await login(email, password);
        } else {
          data = await registration(email, password);
        }
        user.setUser(user);
        user.setIsAuth(true);
        history(SHOP_ROUTE);
    } catch (e) {
      if (e.response && e.response.data) {
        alert(e.response.data.message);
      }
    }

  }

  return (
<Container className='d-flex justify-content-center align-items-center'
style={{height: window.innerHeight - 54}}>
  <Card style={{width: 600}} className='p-5'>
    <h2 className='m-auto'>{isLogin ? 'Authoriaztion' : 'Registration'}</h2>
    <Form className='d-flex flex-column'>
      <Form.Control
        className='mt-3'
        placeholder='Please enter your e-mail...'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Form.Control
        className='mt-3'
        placeholder='Please enter your Password...'
        value={password}
        onChange={e => setPassword(e.target.value)}
        type='password'
      />

      <ListGroup horizontal className='d-flex justify-content-between mt-3 pl-3 pr-3'>
          {isLogin ?
            <div>
              Need Account? <NavLink to={REGISTRATION_ROUTE}> Sign In </NavLink>
            </div>
            :
            <div>
              You have an account? <NavLink to={LOGIN_ROUTE}> Log In </NavLink>
            </div>
          }
          <Button className='mt-3 pl-3 pr-3'
            variant={'outline-primary'}
            onClick={click}
            >
              {isLogin ? 'Login' : 'Sign In'}
          </Button>

      </ListGroup>
    </Form>
  </Card>
</Container>
  );
});

export default Auth;