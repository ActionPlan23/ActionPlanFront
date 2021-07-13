import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";


const ADD_REPLY = "ADD_REPLY";
const GET_REPLY = "GET_REPLY";

const addReply = createAction(ADD_REPLY, (reply) => ({ reply }));
const getReply = createAction(GET_REPLY, (reply_list) =>({reply_list}));

const initialState = {
    reply_list: []
};

const getReplySV = (id)=>{
    return function(dispatch){
        //게시물 댓글 불러오기
          axios.get('http://localhost:4000/api/plan/1')
          .then(res=> {
            console.log(res.data);
            dispatch(getReply(res.data));
          })
  
      }
}

const addReplySV = (new_reply, id)=>{
    console.log(new_reply);
    return function(dispatch, getState, {history}){
        //게시물 댓글 불러오기
          axios.post('http://localhost:4000/api/plan/1' , {
            replyContent : new_reply.replyContent,
            replyWriter : new_reply.replyWriter,
            replyPassword : new_reply.replyPassword,

          })
          .then(res=> {
              console.log(res);
            dispatch(addReply(new_reply));
            history.push("/comments");
          })
          .catch(err => console.log( "댓글 쓰기 오류",err))
  
      }
}




export default handleActions(
    {
        [GET_REPLY]: (state, action) =>
        produce(state, (draft) => {
          draft.reply_list = action.payload.reply_list;
        }),
        [ADD_REPLY] :(state, action) => 
        produce(state,(draft)=>{
            draft.reply_list.push(action.payload.reply);
        })
 
    },
    initialState
  );
  
  const actionCreators = {
    getReplySV,
    addReplySV
  };
    
  export { actionCreators };
  
  