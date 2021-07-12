import React from 'react';
import { useDispatch } from 'react-redux';
import {history} from "../redux/configStore";

import { Grid, Text, Button, Input } from '../elements';
import { actionCreators } from '../redux/modules/plan';

import EnterPassword from "./EnterPassword"; //비밀번호 입력창 띄우기

const Plan = (props) => {

    const { id, planId, title, writer, content, createdAt, modifiedAt, countReply } = props;
    // 가짜 서버 작업을 위한 id임. 나중에 서버 만들어지면 빼야 됨!
    const dispatch = useDispatch();

    //게시글 수정하기
    const editPlan = () => {
        dispatch(actionCreators.editPlanServer(id, plan));
        console.log(plan,"수정할 플랜");
        history.replace("/");
      }
    const plan = {
        "title" : "수정 제목",
        "content" : "수정 내용",
        "planPassword": 1234,
      }      
    //게시글 삭제하기
    const deletePlan = () => {
        dispatch(actionCreators.deletePlanServer(id, {password}));
        console.log(id,"삭제할 플랜아이디");
        history.replace("/");
    }     



    //비밀번호 입력창 띄우기
    const [showWindow, setShowWindow] = React.useState(false);
    const [password, setPassword] = React.useState("");


    return (
        <React.Fragment>
            {/* <Button _onClick={editPlan}>수정하기 테스트</Button>
            <Button _onClick={deletePlan}>삭제하기 테스트</Button> */}
            



            {/* 게시글 수정하기 버튼 */}
            <Button _onClick={() => setShowWindow(true)}>수정하기</Button>
            {/* 비밀번호 입력 창 띄우기 */}
            <EnterPassword showWindow={showWindow}>
                <Grid width="200px" position="fixed" top="30%" left="30%">
                    <Input _onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="비밀번호를 입력하세요.">비밀번호</Input>
                    <Button _onClick={() => setShowWindow(false)}>닫기</Button>
                    <Button _onClick={editPlan}>확인</Button>
                </Grid>
            </EnterPassword>





            <Grid border="1px solid black" margin="20px 0">
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
    createdAt : "",
    modifiedAt : "",
    countReply: null
}

export default Plan;