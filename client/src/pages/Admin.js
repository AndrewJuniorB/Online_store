import React, {useState} from 'react';
import { Container, Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import CreateBrand from '../components/modals/CreateBrand.js'
import CreateDevice from '../components/modals/CreateDevice.js'
import CreateType from '../components/modals/CreateType.js'

const Admin = observer(() => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  return (
    <Container className='d-flex flex-column'>

        <h2 className='d-flex flex-column align-items-center mt-2 p-2' style={{color: 'blue'}}>Admin Page</h2>

      <Button
      variant={'outline-info'}
      className='mt-3 p-3'
      onClick ={()=> setTypeVisible(true)}
      >
        Add type
      </Button>
      <Button
      variant={'outline-info'}
      className='mt-3 p-3'
      onClick ={()=> setBrandVisible(true)}
      >
        Add brand
      </Button>
      <Button
      variant={'outline-info'}
      className='mt-3 p-3'
      onClick ={()=> setDeviceVisible(true)}
      >
        Add item
      </Button>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
    </Container>
  );
});

export default Admin;