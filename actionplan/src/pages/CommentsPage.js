import React from "react";
import PlanDetail from "../components/PlanDetail";
import { Grid, Input , Button} from "../elements";
import CommentList from "../components/CommentList"
import {useSelector, useDispatch} from 'react-redux';
import {actionCreators as planActions} from "../redux/modules/plan";
import { actionCreators as replyActions } from "../redux/modules/reply";

const CommentsPage = (props) =>{
    const dispatch = useDispatch();
    const plan_id = props.match.params.id;
    const plan =  useSelector((state)=> state.plan.plan);
   const [comment, setComment] = React.useState('');

   const changeContents = (e) =>{
       setComment(e.target.value);
   }

   const new_reply = {
    replyContent:comment,
    replyWriter:"나",
    replyPassword: "111"
   }

   const addComment = ()=>{
      dispatch(replyActions.addReplySV(new_reply,plan_id))
   }

    React.useEffect(()=>{
        dispatch(planActions.getOnePlanSV(plan_id));
        dispatch(replyActions.getReplySV(plan_id));
    },[]);
    return(
        <React.Fragment>
            {/* 임시 헤더 */}
            <Grid height="100px">
                댓글달기
            </Grid>
            <Grid is_flex padding="20px 100px">
                <Grid margin="0px 100px 0px 0px">
            {
                 plan.map((p, idx)=>{
                    return (<PlanDetail key={p.planId} {...p}></PlanDetail>)
                }) 
            }
                </Grid>

                
                <Grid height="500px">
                    <Grid is_flex padding="20px 0px 0px 0px"margin="0px 0px 50px 0px">
                        <Input placeholder="댓글 달기"
                            _onChange = {changeContents}
                            value={comment}
                        ></Input>
                        <Button width="100px"
                        _onClick={addComment}>작성</Button>
                    </Grid>
                    {
                        plan.map((p, idx)=>{
                            return (<CommentList key={p.planId} {...p}></CommentList>)
                        }) 
                     }
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default CommentsPage;