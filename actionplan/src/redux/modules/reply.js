import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import instance from "../../shared/Request";


const ADD_REPLY = "ADD_REPLY";
const GET_REPLY = "GET_REPLY";

const addReply = createAction(ADD_REPLY, (reply) => ({ reply }));
const getReply = createAction(GET_REPLY, (reply_list) =>({reply_list}));

const initialState = {
    reply_list: [],
};

const getReplySV = (id)=>{
    return function(dispatch){
        //게시물 댓글 불러오기
        instance.get('/plan/'+id)
          .then(res=> {
            console.log(res.data);
            console.log(res.data);
            dispatch(getReply(res.data));
          })
  
      }
}

const addReplySV = (new_reply, id)=>{
    console.log(new_reply);
    return function(dispatch, getState, {history}){
        //게시물 댓글 불러오기
          instance.post('/reply/'+id , {
            replyContent : new_reply.replyContent,
            replyWriter : new_reply.replyWriter,
            replyPassword : new_reply.replyPassword,

          })
          .then(res=> {
              console.log("댓글 작성 성공")
            dispatch(addReply(new_reply));
            history.push("/comments/"+id);
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
          if(draft.reply_list.length>0){
            draft.reply_list.unshift(action.payload.reply);
          }
          draft.reply_list = action.payload.reply;
        })
 
    },
    initialState
  );
  
  const actionCreators = {
    getReplySV,
    addReplySV
  };
    
  export { actionCreators };
  
  