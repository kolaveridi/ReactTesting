import commentsReducer from 'reducers/comments';
import {SAVE_COMMENT} from 'actions/types';
it ('handles actions of type  SAVE_COMMENT',()=>{
     const action ={
       type:SAVE_COMMENT,
       payload:'New comment'
     };
  const newState= commentsReducer([],action);// we pass thev empty state
  expect(newState).toEqual(['New comment']);// we expect the new state to be an array with the new data in it
})

it('handles action with unknown type ',()=>{
   const newState=  commentsReducer([],{});
   expect(newState).toEqual([]);
});
