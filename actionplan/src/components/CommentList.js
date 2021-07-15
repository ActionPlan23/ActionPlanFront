import React from "react";
import { Grid } from "../elements";
import Comment from "./Comment";
import { actionCreators as replyActions} from "../redux/modules/reply";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const CommentList = (props) =>{
    const dispatch = useDispatch();
    
    const {replyList, planId} = useSelector(state=> state.reply.reply_list);
    console.log(props.id)
    React.useEffect(()=>{
        dispatch(replyActions.getReplySV(props.id));
        
    },[]);
   
    if(!replyList){
        return <div>로딩중</div>
    }
    if(replyList.length===0){
        return <div>아직 댓글이 없어요!</div>
    }

        return(
            <React.Fragment>
                {/* Grid에 overflow필요 */}
                <Grid height="50vh" overflow="scroll">
               {
                   replyList.map((p, idx)=>{
                        return (<Comment key={p.planId} {...p}></Comment>)
                    })
                   
               }
                   
                   
                </Grid>
            </React.Fragment>
        )
    

  
}

export default CommentList;