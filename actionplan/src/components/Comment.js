import React, { useState } from "react";
import { Grid, Text, Button, Input } from "../elements";
import styled from "styled-components";
import { connectAdvanced, useDispatch } from "react-redux";
import { actionCreators as replyActions  } from "../redux/modules/reply";

const Comment = (props) =>{
  
    const dispatch = useDispatch();
    const {replyId, replyContent, replyWriter}= props;
    const [deletepopup, setDelPopup] = useState(false);
    const [password, setPassword] = useState("");
    const [editpopup, setEditPopup] = useState(false);
    const [content, setContent] = useState("");
   

    const deleteReply = ()=>{
        dispatch(replyActions.deleteReplyServer(replyId, password));
    }

    const new_reply = {
        replyContent: content,
        replyPassword: password
    }
    const editReply = ()=>{
        dispatch(replyActions.editReplyServer(replyId, new_reply, password));
    }
  

    return(
        <React.Fragment>
            <Grid is_flex border="1px solid black" margin="0px 0px 10px 0px">
                <Text>{replyContent}</Text>
                <Text>작성자 ={replyContent}</Text>
                <Grid is_flex width="210px">
                <Button width="100px"
                _onClick = {()=>{
                    setEditPopup(true);
                }}
                >수정</Button>
                <Button width="100px"
                _onClick={
                    ()=>{
                        setDelPopup(true);
                    }
                }>삭제</Button>
                </Grid>
               
            </Grid>

            { deletepopup && 
                 <PasswordPop>
                 <Grid padding="20px">
                 <Text>비밀번호를 입력해주세요</Text>
                     <Input
                         type="password"
                         value={password}
                         placeholder="비밀번호를 입력하세요."
                         _onChange={(e)=>{
                             setPassword(e.target.value);
                         }}
                     ></Input>
                         <Button
                         _onClick={()=>{
                            deleteReply()
                            setDelPopup(false)
                         }} >확인</Button>
                 </Grid>
                 </PasswordPop>
            }

            {
                editpopup && 
                <EditPopup>
                <Grid padding="20px">
                <Text>내용 입력해주세요</Text>
                     <Input
                         
                         value={content}
                         placeholder="내용 입력하세요."
                         _onChange={(e)=>{
                             setContent(e.target.value);
                         }}
                     ></Input>
                 <Text>비밀번호를 입력해주세요</Text>
                     <Input
                         type="password"
                         value={password}
                         placeholder="비밀번호를 입력하세요."
                         _onChange={(e)=>{
                             setPassword(e.target.value);
                         }}
                     ></Input>
                         <Button
                         _onClick={()=>{
                            editReply()
                            setDelPopup(false)
                         }} >확인</Button>
                 </Grid>
                </EditPopup>

            }
        </React.Fragment>
    )
}

const PasswordPop = styled.div`
    width: 400px;
    height: 200px;
    position: absolute;
    margin: 0 auto;
    left: 50%;
    top: 50%;
    z-index:100;
    background-color: white;
    border-radius: 20px;
`;

const EditPopup = styled.div`
    width: 400px;
    height: 300px;
    position: absolute;
    margin: 0 auto;
    left: 50%;
    top: 50%;
    z-index:100;
    background-color: white;
    border-radius: 20px;
`;

export default Comment;