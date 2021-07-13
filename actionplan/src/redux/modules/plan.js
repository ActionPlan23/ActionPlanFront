import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const SET_TODAY_PLAN = "SET_TODAY_PLAN";
const SET_PAST_PLAN = "SET_PAST_PLAN";
const SET_ALL_PLAN = "SET_ALL_PLAN";
const SET_PLAN = "SET_PLAN";

const ADD_PLAN = "ADD_PLAN";
const EDIT_PLAN = "EDIT_PLAN";
const DELETE_PLAN = "DELETE_PLAN";
const LOADING = "LOADING";

const setTodayPlan = createAction(SET_TODAY_PLAN, (plan_list) => ({ plan_list }));
const setPastPlan = createAction(SET_PAST_PLAN, (plan_list) => ({ plan_list }));
const setAllPlan = createAction(SET_ALL_PLAN, (plan_list) => ({ plan_list }));

const setPlan = createAction(SET_PLAN, (plan_list)=>({plan_list}));
const addPlan = createAction(ADD_PLAN, (plan) => ({ plan }));
const editPlan = createAction(EDIT_PLAN, (plan_id, plan) => ({
  plan_id,
  plan,
}));
const deletePlan = createAction(DELETE_PLAN, (plan_id, plan_password) => ({ plan_id, plan_password }));

const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
    today_list: [],
    past_list: [],
    all_list: [],
    plan:[],
    is_loading: false,
};



//action creators
//목표 불러오기
const getPlansSV = () => {
    return function(dispatch){
      //오늘 목표 불러오기
        axios.get('http://localhost:4000/api/todayplan')
        .then(function (response) {
            dispatch(setTodayPlan(response.data));
        })
        .catch(function (error) {
            console.log(error);
        })
        //과거 목표 불러오기
        axios.get('http://localhost:4000/api/pastplan')
        .then(function (response) {
            dispatch(setPastPlan(response.data));
        })
        .catch(function (error) {
            console.log(error);
        })

    }
}

// 디테일 페이지에서 하나만 가져오기
const getOnePlanSV = (id) => {
  console.log("getOnePlanSV 실행")
  return function(dispatch, getState, {history}){
    axios.get('http://localhost:4000/api/plan/'+1)
    .then(res=> {
      console.log(res.data);
      dispatch(setPlan(res.data));
    })
  }
    
};


// 문제?
const addPlanServer = (plan={}) => {
  return function (dispatch, getState, { history }) {
    axios.post('http://localhost:4000/api/plan',plan)
    .then(function (response) {    
      dispatch(addPlan(plan));
      window.alert("게시글 추가 완료!");
      history.replace("/");
    })
    .catch((err) => {
      window.alert("앗! 포스트 작성에 문제가 있어요!");
      console.log("post 작성에 실패했어요!", err);
    });
    };
  };
  

  const editPlanServer = (plan_id = null, plan = {}) => {
    return function (dispatch, getState, { history }) {
      if (!plan_id) {
        console.log("게시물 정보가 없어요!");
        return;
      }
  
      axios.put(`http://localhost:4000/plan/${plan_id}`,plan)
      .then(function (response) {
          dispatch(editPlan(plan_id, plan));
          window.alert("게시글 수정 완료!");
          history.push("/");
      })
      .catch(function (error) {
          console.log(error);
          alert("게시글 수정 오류입니다");
      })
}};


const deletePlanServer = (plan_id = null, plan_password={}) => {
  return function (dispatch, getState, { history }) {
    if (!plan_id) {
      alert("게시글 정보가 없어요!");
      return;
    }

    axios.delete(`http://localhost:4000/plan/${plan_id}`,plan_password)
    .then(function (response) {
        dispatch(deletePlan(plan_id));
        alert("게시글이 삭제되었어요🙂")
        history.replace("/");
    })
    .catch(function (error) {
        console.log(error);
        alert("게시글 삭제 오류입니다");
    })

  } 
}

export default handleActions(
    {
        [SET_TODAY_PLAN]: (state, action) =>
        produce(state, (draft) => {
          draft.today_list = action.payload.plan_list;
        //   draft.is_loading = false;
        }),

        [SET_PAST_PLAN]: (state, action) =>
        produce(state, (draft) => {
          draft.past_list = action.payload.plan_list;
        //   draft.is_loading = false;
        }),

        [SET_ALL_PLAN]: (state, action) =>
        produce(state, (draft) => {
          console.log(draft.list,"before_draft.list");
          draft.all_list = action.payload.plan_list;
          console.log(draft.list,"after_draft.list");
        //   draft.is_loading = false;
        }),     
        [SET_PLAN] : (state, action) =>
        produce(state, (draft)=>{
          draft.plan = action.payload.plan_list;
          console.log(draft.plan);
        })   ,

      [ADD_PLAN]: (state, action) =>
        produce(state, (draft) => {
          // draft.all_list.unshift(action.payload.plan);
          draft.today_list.unshift(action.payload.plan);
          // draft.past_list.unshift(action.payload.plan); //가짜 서버 테스트 용

      }),
      [EDIT_PLAN]: (state, action) =>
        produce(state, (draft) => {
          let all_idx = draft.all_list.findIndex((p) => p.id === action.payload.plan_id);
          draft.all_list[all_idx] = { ...draft.all_list[all_idx], ...action.payload.plan };

          let past_idx = draft.past_list.findIndex((p) => p.id === action.payload.plan_id);
          if (past_idx){
          draft.past_list[past_idx] = { ...draft.past_list[past_idx], ...action.payload.plan };
          }

          let today_idx = draft.today_list.findIndex((p) => p.id === action.payload.plan_id);
          if (today_idx){
          draft.today_list[today_idx] = { ...draft.today_list[today_idx], ...action.payload.plan };
          } 
          
        }),
  
      [DELETE_PLAN]: (state, action) =>
        produce(state, (draft) => {
          const all_idx = draft.all_list.findIndex((p) => p.id === action.payload.plan_id);
          if (all_idx > -1) draft.all_list.splice(all_idx,1);

          const past_idx = draft.past_list.findIndex((p) => p.id === action.payload.plan_id);
          if (past_idx > -1) draft.past_list.splice(past_idx,1);

          const today_idx = draft.today_list.findIndex((p) => p.id === action.payload.plan_id);
          if (today_idx > -1) draft.today_list.splice(today_idx,1);
      }),
      
    //   [LOADING]: (state, action) => produce(state, (draft) => {
    //       draft.is_loading = action.payload.is_loading;
    //     }),
 
    },
    initialState
  );
  





const actionCreators = {
  getPlansSV,
 
    addPlanServer,
    editPlanServer,
    deletePlanServer,
    getOnePlanSV,
};
  
export { actionCreators };



// const getPosts = async () => {
//     try {
//       const userPosts = await axios.get("http://localhost:3000/data/data.json")
      
//       console.log(userPosts.data.data);
    
//     } catch (err) {
//       console.error(err.message);
//     }
//     axios.post("http://localhost:3000/data/data.json",{
//       firstName: 'Fred',
//       lastName: 'flfl',
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//   };

//   useEffect(()=>{
//       getPosts();
//   })