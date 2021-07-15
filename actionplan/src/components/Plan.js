import React from 'react';
import { useDispatch } from 'react-redux';
import {history} from "../redux/configStore";
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import { Grid, Text, Button } from '../elements';
import { actionCreators } from '../redux/modules/plan';
import moment from 'moment';

const Plan = (props) => {

    const { id, planId, title, writer, content, planPassword, createdAt, modifiedAt, countReply } = props;
    
    //가짜 서버 작업을 위한 id임. 나중에 서버 만들어지면 빼야 됨!
    const dispatch = useDispatch();
    const dt = createdAt.substr(0,10);
    let today = moment().format("YYYY-MM-DD");
    console.log(today);

    return (
        <React.Fragment>
            <Grid 
            // shadow= "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
           transition="all ease 0.5s"
           hovertransition=" scale( 1.05, 1.05 )"
            hovercolor="#D1DEF1"
            hovershadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
           border_radius="20px"
           bgcolor="white"
            margin="25px" 
            width="20vw" 
            height="400px"
            _onClick={()=>{
               
                    history.push(`/comments/${props.planId}`);
                
              
            }}>
                <Grid padding="20px">
                    <Grid textalign="center" margin="0px 0px 50px 0px">
                    <Text fontsize="25px" fontweight="bold" >{title}</Text>
                    </Grid>
                    <Grid textalign="center" margin="0px 0px 50px 0px" height="100px">
                    <Text fontsize="20px" fontweight="bold" >{content}</Text>
                    </Grid>
                    <Grid display="flex" justify="right" padding="30px">
                    <Text fontsize="18px">{writer}</Text>
                    <CommentOutlinedIcon/>
                    <Text  fontsize="18px"> {countReply}</Text>
                    </Grid>
                   {/* 과거에는 날짜가 나와야함 */}
                 {
                     (dt !== today)&& <Text>{dt}</Text>
                 }
                   
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