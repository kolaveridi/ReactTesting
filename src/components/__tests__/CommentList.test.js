import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(()=>{
   const initialState={
        comments:['Comment 1','Comment 2']
     };

   wrapped= mount(
     <Root initialState={initialState}>
       <CommentList/>
     </Root>
   );
});


afterEach(()=>{
   wrapped.unmount();
});


it('creates one Li per comment',()=>{
   console.log(wrapped.find('li').length);
});
