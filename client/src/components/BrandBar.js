import React, {useContext} from 'react';
import { observer } from 'mobx-react-lite';
import {Context} from '../index.js';
import {Row, Card} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const BrandBar = observer(() => {
  const {device} = useContext(Context);
  return(
  <ListGroup horizontal className='mt-2'>
      {device.brands.map(brand =>
      <Card
        key={brand.id}
        style={{cursor:'pointer'}}
        className='p-3'
        border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
        onClick={() => device.setSelectedBrand(brand)}
        >
        {brand.name}
        </Card>
      )}
  </ListGroup>


  );
});

export default BrandBar;