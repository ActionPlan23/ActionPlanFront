import React from "react";
import PlanDetail from "../components/PlanDetail";
import { Grid, Input , Button} from "../elements";
import CommentList from "../components/CommentList";
import Plan from "../components/Plan";
import {useSelector, useDispatch} from 'react-redux';
import {actionCreators as planActions} from "../redux/modules/plan";
import { actionCreators as replyActions } from "../redux/modules/reply";
import { history } from "../redux/configStore";

const CommentsPage = (props) =>{
    const dispatch = useDispatch();
    const plan_id = props.match.params.id;
    const plan =  useSelector((state)=> state.plan.plan);
   const [comment, setComment] = React.useState('');
    const reply = useSelector((state)=> state.reply.reply_list);
    console.log(reply);
   const changeContents = (e) =>{
       setComment(e.target.value);
   }

   const new_reply = {
    replyContent:comment,
    replyWriter:"d이현자",
    replyPassword: "1234"
   }

   const addComment = ()=>{
      dispatch(replyActions.addReplySV(new_reply,plan_id));
   }

    React.useEffect(()=>{
        dispatch(planActions.getOnePlanSV(plan_id));
        dispatch(replyActions.getReplySV(plan_id));
        console.log(plan);
    },[]);
    return(
        <React.Fragment>
        
            <Grid is_flex padding="20px px">
                <Grid margin="0px 100px 0px 0px">
                    <PlanDetail {...plan}></PlanDetail>
                  
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
                    <CommentList></CommentList>
                   
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default CommentsPage;