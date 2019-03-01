import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';
beforeEach(()=>{
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments',{
      status:200,
      resposne:[{name:'Fetched #1'},{name:'Fetched #2'}]
  });
})

afterEach(()=>{
  moxios.uninstall();
})
it('can fetch a list of comments and display them',(done)=>{
    //ATtempt to render the App
        const wrapped = mount(
              <Root>
                 <App/>
              </Root>

        );


    // find the fetchComments button and click it
    wrapped.find('.fetch-comments').simulate('click');
    // introduce a tiny little pause
    console.log('wrapped data',wrapped);
    setTimeout(()=>{
        wrapped.update();
        //Expect to find a list of Comments
        expect(wrapped.find('li').length).toEqual(2);
        done();
    },1000);


})
