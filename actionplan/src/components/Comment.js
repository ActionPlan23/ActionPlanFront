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
        if(password===""){
            window.alert("비밀번호를 입력하세요!");
            setDelPopup(false);
        }else{
            dispatch(replyActions.deleteReplyServer(replyId, password));
        }
      
    }

    const new_reply = {
        replyContent: content,
        replyPassword: password
    }
    const editReply = ()=>{
        if(password===""|| content===""){
            window.alert("입력하지 않은 항목이 있어요!");
            setEditPopup(false);
        }
        else{
            dispatch(replyActions.editReplyServer(replyId, new_reply, password));
        }
       
    }
  

    return(
        <React.Fragment>
            <Grid is_flex border="1px solid black" bgcolor="white">
            <Grid  margin="0px 0px 10px 0px" padding="2px 10px">
                <Text margin="10px"fontweight="bold" fontsize="19px">{replyContent}</Text>
                <Text margin="10px" fontsize="17px">작성자 : {replyWriter}</Text>
            </Grid>
            <Grid is_flex width="300px" padding="0px 10px">
                <Button width="90px" 
                
                hovercolor="#F3E5ED"
                _onClick = {()=>{
                    setEditPopup(!editpopup);
                }}
                >수정</Button>
                <Button 
                width="90px"
                hovercolor="#F3E5ED"
                _onClick={
                    ()=>{
                        setDelPopup(!deletepopup);
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
                         onSubmit={()=>{
                            deleteReply();
                            setDelPopup(false);
                            setPassword("")
                         }}
                     ></Input>
                         <Button
                         _onClick={()=>{
                            deleteReply()
                            setDelPopup(false)
                            setPassword("")
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
                         onSubmit={()=>{
                            editReply()
                            setEditPopup(false)
                            setPassword("")
                            setContent("")
                         }}
                     ></Input>
                         <Button
                         _onClick={()=>{
                            editReply()
                            setEditPopup(false)
                            setPassword("")
                            setContent("")
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
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
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
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export default Comment;