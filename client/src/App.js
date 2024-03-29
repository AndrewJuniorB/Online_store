import React, {useState, useEffect, useContext} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter.js';
import NavBar from './components/NavBar.js';
import {observer} from 'mobx-react-lite';
import {Context} from './index.js';
import {check} from './http/userAPI.js';
import {Spinner} from 'react-bootstrap';

const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

useEffect( () => {
  setTimeout(() => {
    check().then(data => {
      user.setUser(true);
      user.setIsAuth(true);
    }).finally(() => setLoading(false));
  }, 1000  )
}, [])

if(loading) {

  return <Spinner  animation={'grow'}/>
}

  return (
    <BrowserRouter>
        <NavBar/>
        <AppRouter/>
    </BrowserRouter>

  );
});

export default App;
