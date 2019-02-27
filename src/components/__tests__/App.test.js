import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { mount } from 'enzyme';
let wrapped;
//before every single test
beforeEach(()=>{
     wrapped =shallow(<App/>);
});

it ('shows a comment box',()=>{
    expect(wrapped.find(CommentBox).length).toEqual(1);
});


it('shows a comment list',()=>{
    expect(wrapped.find(CommentList).length).toEqual(1);
})
