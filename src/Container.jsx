import React from 'react';
import Item from './Item';
import { Card } from '@mui/material';
// import { keyboard } from '@testing-library/user-event/dist/keyboard';


function Container({container}) {
   return (
     <>
       <Card
         sx={{ backgroundColor: '#DCDCFF', display: 'flex', flexWrap: 'wrap' }}
       >
         {container.map((item) => {
           return <Item key={item.id} {...item} />;
         })}
       </Card>
     </>
   );
}

export default Container
