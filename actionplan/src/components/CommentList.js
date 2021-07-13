import React from "react";
import { Grid } from "../elements";
import Comment from "./Comment";
import { actionCreators as replyActions} from "../redux/modules/reply";
import { useSelector, useDispatch } from "react-redux";

const CommentList = (props) =>{
    const dispatch = useDispatch();
    const reply_list = props.reply_list;

    return(
        <React.Fragment>
            {/* Grid에 overflow필요 */}
            <Grid>
           {
                reply_list.map((p, idx)=>{
                    return (<Comment key={p.planId} {...p}></Comment>)
                })
           }
            </Grid>
        </React.Fragment>
    )
}

export default CommentList;