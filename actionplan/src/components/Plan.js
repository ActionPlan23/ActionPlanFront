import React from 'react';
import { useDispatch } from 'react-redux';
import {history} from "../redux/configStore";

import { Grid, Text, Button } from '../elements';
import { actionCreators } from '../redux/modules/plan';
const Plan = (props) => {

    const { id, planId, title, writer, content, planPassword, createdAt, modifiedAt, countReply } = props;
    
    //가짜 서버 작업을 위한 id임. 나중에 서버 만들어지면 빼야 됨!
    const dispatch = useDispatch();
  

    return (
        <React.Fragment>
            <Grid border="1px solid black" margin="20px 0"
            _onClick={()=>{
                history.push(`/comments/${props.planId}`);
            }}>
                <Grid padding="10px 20px">
                    <Text fontsize="20px" fontweight="bold" >{writer}</Text>
                    <Text fontsize="20px" fontweight="bold" >{title}</Text>
                    <Text>{content}</Text>
                </Grid>
                <Grid display="flex" justify="space-between" bgcolor="darkgray" padding="0px 20px">
                    <Text>댓글 {countReply}</Text>
                    <Text>{createdAt}</Text>
                    <Text>{modifiedAt}</Text>

                </Grid>
            </Grid>
        </React.Fragment>
    );
};


Plan.defaultProps = {
    planId : 0,
    title : "",
    writer : "",
    content : "",
    planPassword: 1234,
    createdAt : "",
    modifiedAt : "",
    countReply: null
}

export default Plan;