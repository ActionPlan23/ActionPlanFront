import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import instance from "../../shared/Request";


const ADD_REPLY = "ADD_REPLY";
const GET_REPLY = "GET_REPLY";
const DELETE_REPLY = "DELETE_REPLY";
const EDIT_REPLY = "EDIT_REPLY"


const addReply = createAction(ADD_REPLY, (reply) => ({ reply }));
const getReply = createAction(GET_REPLY, (reply_list) =>({reply_list}));
const editReply = createAction(EDIT_REPLY, (reply_id, new_reply) => ({reply_id, new_reply}) );
const deleteReply = createAction(DELETE_REPLY, (reply_id, password) => ({ reply_id, password }));

const initialState = {
    reply_list: [],
};

//게시글 댓글 불러오기
const getReplySV = (id)=>{
    return function(dispatch){
        //게시물 댓글 불러오기
        instance.get('/plan/'+id)
          .then(res=> {
            dispatch(getReply(res.data));
          })
  
      }
}

// 댓글 추가하기
const addReplySV = (new_reply, id )=>{
    console.log(new_reply);
    return function(dispatch, getState, {history}){
        //게시물 댓글 불러오기
          instance.post('/reply/'+id , {
            replyContent : new_reply.replyContent,
            replyWriter : new_reply.replyWriter,
            replyPassword : new_reply.replyPassword,

          })
          .then(res=> {
            console.log(res.data)
              window.alert("댓글 작성 성공")
            dispatch(addReply({...new_reply, replyId: res.data.replyId}));
            // window.location.replace("/comments/"+id)
            
          })
          .catch(err => window.alert("댓글 작성 실패"))
  
      }
}


//댓글 삭제
const deleteReplyServer = (reply_id, password) => {
  return function (dispatch, getState, { history }) {
    if (!reply_id) {
      alert("댓글 정보가 없어요!");
      return;
    }

    instance.delete(`/reply/${reply_id}`,{
    
      data:{
        password
      }
    })
    .then((res)=>{
      console.log(res);
      window.alert("삭제 했습니다!")
      dispatch(deleteReply(reply_id, password));
     
    })
    .catch((err)=>{
      window.alert("비밀번호가 다릅니다!")
      console.log(err)
    });
  
  } 
}

// 댓글 수정
const editReplyServer = (reply_id, new_reply, password) => {
  return function (dispatch, getState, { history }) {
    if (!reply_id) {
      console.log("댓글 정보가 없어요!");
      return;
    }

    instance.put(`/reply/${reply_id}`,{
      replyContent: new_reply.replyContent,
      replyPassword: new_reply.replyPassword,
    },{password})
    .then(function (response) {
        dispatch(editReply(reply_id, new_reply));
        window.alert("댓글 수정 완료!");
    
    })
    .catch(function (error) {
        console.log(error);
        alert("비밀번호가 다릅니다!");
    })
}};



export default handleActions(
    {
        [GET_REPLY]: (state, action) =>
        produce(state, (draft) => {
          draft.reply_list = action.payload.reply_list;
        }),
        [ADD_REPLY] :(state, action) => 
        produce(state,(draft)=>{
          draft.reply_list.replyList.unshift(action.payload.reply);
        }),
        [EDIT_REPLY]: (state, action) =>
        produce(state, (draft) => {
          let reply_idx = draft.reply_list.replyList.findIndex((p) => p.replyId === action.payload.reply_id);
          draft.reply_list.replyList[reply_idx] = { ...draft.reply_list.replyList[reply_idx], ...action.payload.new_reply };
         
        }),
  
        [DELETE_REPLY]: (state, action) =>
        produce(state, (draft) => {
          const reply_idx = draft.reply_list.replyList.findIndex((p) => p.replyId === action.payload.reply_id);
          if (reply_idx > -1) draft.reply_list.replyList.splice(reply_idx,1);
        
      }),
 
    },
    initialState
  );
  
  const actionCreators = {
    getReplySV,
    addReplySV,
    deleteReplyServer,
    editReplyServer
  };
    
  export { actionCreators };
  
  