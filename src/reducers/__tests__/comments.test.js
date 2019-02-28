import commentsReducer from 'reducers/comments';
import {SAVE_COMMENT} from 'actions/types';
it ('handles actions of type  SAVE_COMMENT',()=>{
     const action ={
       type:SAVE_COMMENT,
       payload:'New comment'
     };
  const newState= commentsReducer([],action);// we pass thev empty state
  expect(newState).toEqual(['New comment']);
})
