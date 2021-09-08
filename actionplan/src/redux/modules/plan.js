import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import instance from "../../shared/Request";


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
const editPlan = createAction(EDIT_PLAN, (plan_id, plan, password) => ({
  plan_id,
  plan,
  password
}));
const deletePlan = createAction(DELETE_PLAN, (plan_id, password) => ({ plan_id, password }));

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
      instance.get('/todayplan')
        .then(function (response) {
            dispatch(setTodayPlan(response.data));
        })
        .catch(function (error) {
            console.log(error);
        })
        //과거 목표 불러오기
        instance.get('/pastplan')
        .then(function (response) {
            dispatch(setPastPlan(response.data));
        })
        .catch(function (error) {
            console.log(error);
        })

            //전체 목표 불러오기
            instance.get('/plan')
            .then(function (response) {
                dispatch(setAllPlan(response.data));
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
    instance.get('/plan/'+id)
    .then(res=> {
      console.log(res.data);
      dispatch(setPlan(res.data));
    })
  }
    
};

//추가하기
const addPlanServer = (new_plan) => {
  return function (dispatch, getState, { history }) {
    console.log(new_plan);
    instance.post('/plan',{
      writer : new_plan.writer,
      title: new_plan.title,
      content: new_plan.content,
      planPassword: new_plan.planPassword,

    })
    .then((res)=>{
      console.log(res.data);
      dispatch(addPlan({...new_plan, planId: res.data.planId, countReply: res.data.countReply}));
    
    })
    .catch((err)=>{
      console.log(err);
    })
    };
  };
  
// 게시글 수정
  const editPlanServer = (plan_id, new_plan, password) => {
    return function (dispatch, getState, { history }) {
      if (!plan_id) {
        console.log("게시물 정보가 없어요!");
        return;
      }
  
      instance.put(`/plan/${plan_id}`,{
        title: new_plan.title,
        content: new_plan.content,
        planPassword: new_plan.planPassword
      }, {
        password
      })
      .then(function (response) {
        console.log("수정", response.data);
          dispatch(editPlan(plan_id, new_plan));
          window.alert("게시글 수정 완료!");
          history.push("/");
      })
      .catch(function (error) {
          console.log(error);
          alert("비밀번호가 다릅니다!");
      })
}};

//게시글 삭제
const deletePlanServer = (plan_id, password) => {
  return function (dispatch, getState, { history }) {
    if (!plan_id) {
      alert("게시글 정보가 없어요!");
      return;
    }

    instance.delete(`/plan/${plan_id}`,{
    
      data:{
        password
      }
    })
    .then((res)=>{
      window.alert("삭제 했습니다!")
      dispatch(deletePlan(plan_id, password));
     
    })
    .catch((err)=>{
     window.alert("비밀번호가 다릅니다!")
      console.log(err)
    });
  
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
          console.log(draft.all_list)
          draft.all_list.unshift(action.payload.plan);
          draft.today_list.unshift(action.payload.plan);
          console.log(action.payload.plan);
          console.log(draft.all_list)

      }),
      [EDIT_PLAN]: (state, action) =>
        produce(state, (draft) => {
          let all_idx = draft.all_list.findIndex((p) => p.planId === action.payload.plan_id);
          draft.all_list[all_idx] = { ...draft.all_list[all_idx], ...action.payload.plan };
          let today_idx = draft.today_list.findIndex((p) => p.planId === action.payload.plan_id);
          draft.today_list[today_idx] = { ...draft.today_list[today_idx], ...action.payload.plan };
          let past_idx = draft.past_list.findIndex((p) => p.planId === action.payload.plan_id);
          draft.past_list[past_idx] = { ...draft.past_list[past_idx], ...action.payload.plan };
        }),
  
      [DELETE_PLAN]: (state, action) =>
        produce(state, (draft) => {
          const all_idx = state.all_list.findIndex((p) => parseInt(p.planId)  === parseInt(action.payload.plan_id));
          if (all_idx > -1) {
            draft.all_list.splice(all_idx,1);}
          const today_idx = draft.today_list.findIndex((p) => p.planId === action.payload.plan_id);
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



