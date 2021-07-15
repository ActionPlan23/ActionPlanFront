import React from "react";
import PlanDetail from "../components/PlanDetail";
import { Grid, Input , Button, Text} from "../elements";
import CommentList from "../components/CommentList";
import Plan from "../components/Plan";
import {useSelector, useDispatch} from 'react-redux';
import {actionCreators as planActions} from "../redux/modules/plan";
import { actionCreators as replyActions } from "../redux/modules/reply";
import { history } from "../redux/configStore";
import styled from "styled-components";

const CommentsPage = (props) =>{
    const dispatch = useDispatch();
    const plan_id = props.match.params.id;
    const plan =  useSelector((state)=> state.plan.plan);
   const [comment, setComment] = React.useState('');
   const [popup, setPopup] = React.useState(false);
   const [password , setPassword] = React.useState("");
   const [writer, setWriter] = React.useState("");


   const changeContents = (e) =>{
       setComment(e.target.value);
   }

   const new_reply = {
    replyContent:comment,
    replyWriter:writer,
    replyPassword: password
   }

   const addComment = ()=>{
       if(password===""|| writer===""){
           window.alert("입력하지않은 항목이 있어요!");
       }
       else{
        dispatch(replyActions.addReplySV(new_reply,plan_id));
       }
    
   }

    React.useEffect(()=>{
        dispatch(planActions.getOnePlanSV(plan_id));
        console.log(plan);
    },[]);
    return(
        <React.Fragment>
        <OutterBox>
            
            <Grid margin="0 auto"is_flex  max_width="70vw" >
                    <PlanDetail {...plan}></PlanDetail>
                
                <Grid width="30vw" height="60vh"  >
                    <Grid is_flex  margin="0px 0px 30px 0px">
                        <Input  placeholder="댓글 달기"
                            _onChange = {changeContents}
                            value={comment}
                        ></Input>
                        <Button width="100px"
                        shadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                        hovershadow="rgba(0, 0, 0, 0.1) 0px 1px 2px 0px "
                        _onClick={()=>{
                           setPopup(!popup)
                        }}
                        >작성</Button>
                    </Grid>
                    <CommentList id={plan_id}></CommentList>
                   
                </Grid>
            </Grid>

            {popup && <PasswordPop>
                        <Grid padding="20px">
                        <Text>비밀번호를 입력해주세요</Text>
                            <Input
                                type="password"
                                value={password}
                                placeholder="비밀번호를 입력하세요."
                                _onChange={(e)=>{
                                 setPassword(e.target.value)
                                }}
                            ></Input>
                              <Text>작성자는 누구?</Text>
                              <Input
                              
                                value={writer}
                                placeholder="이름을 입력하세요."
                                _onChange={(e)=>{
                                 setWriter(e.target.value)
                                }}
                            ></Input>

                                <Button
                                _onClick={()=>{
                                    addComment();
                                    setPopup(false);
                                    setComment("")
                                    setPassword("");
                                    setWriter("");
                                }} >확인</Button>
                        </Grid>
                        </PasswordPop>}
                        
                        </OutterBox>
        </React.Fragment>
    )
}


const PasswordPop = styled.div`
    width: 400px;
    height: 300px;
    position: absolute;
    margin: 0 auto;
    left: 50%;
    top: 50%;
    z-index:100;
    background-color: white;
    border-radius: 20px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
const OutterBox = styled.div`
    background-color: white;
    border-radius: 50px;
    max-width: 90vw;
    margin: 0 auto;
    padding: 30px;
    box-sizing: border-box;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export default CommentsPage;