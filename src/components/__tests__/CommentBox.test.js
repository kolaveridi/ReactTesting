import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from 'reducers';

import Root from 'Root';
let wrapped;
//before every single test
beforeEach(()=>{
     wrapped=mount(
         <Root>
         <CommentBox/>
         </Root>
     );
});
afterEach(()=>{
   wrapped.unmount();
});

it('has a text area and two buttons',()=>{

    console.log(wrapped.find('textarea'));
    console.log(wrapped.find('button'));

    expect( wrapped.find('textarea').length ).toEqual(1);
    expect( wrapped.find('button').length).toEqual(2);

});

describe('the text area ',() =>{

    beforeEach(()=>{
        wrapped.find('textarea').simulate('change',{
            target:{value:'new comment'}
        });
        wrapped.update();
    });

    // providing a fake event object that users can type in

    it('has a text area that users can type in ',()=>{
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('when form is submitted ,text area gets emptied',()=>{
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');

    });
});
