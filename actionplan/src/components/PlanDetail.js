import React from "react";
import {Grid, Text, Button, Input} from "../elements"
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import styled from "styled-components";
import { history } from "../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as planActions } from "../redux/modules/plan";

const PlanDetail = (props) =>{
    const dispatch = useDispatch();
    
    const planId = props.planId;
    console.log(planId);
    const deletePlan = ()=>{
        dispatch(planActions.deletePlanServer(planId, password));
        history.push("/")
    }

  
   

    
    const [deletepopup, handleDelPopup] = React.useState(false);
    const [editpopup, handleEditPopup] = React.useState(false);
    const [password, setPassword] =React.useState("");
    const [title, setTitle] =React.useState("");
    const [content, setContent] =React.useState("");
    const new_plan ={
        title: title,
        content: content,
        planPassword:password
        
    } 
    
    const editPlan = ()=>{
        dispatch(planActions.editPlanServer(planId,new_plan, password ))
    }

    console.log(props.title);

   
    return(
        <React.Fragment >
         
            <Grid 
                padding="20px" 
                height="500px" 
                border_radius="20px"
                bgcolor="white"
                 margin="25px" 
                 width="300px" 
                shadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
               >
               <Grid height="350px" textalign="center" >
                   <Text fontsize="30px">{props.title}</Text>
                     <Text>{props.content}</Text>
               </Grid>
               
                 <Grid is_flex width="100px" >
                     <CreateIcon font-size="large" 
                     onClick={()=>{
                        handleEditPopup(!editpopup);
                     }}/>
                    <DeleteOutlineIcon font-size="large"
                    
                    onClick={()=>{
                        handleDelPopup(!deletepopup);
                    }}/>

                    {deletepopup&& 
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
                                    deletePlan();
                                }} >확인</Button>
                        </Grid>
                        </PasswordPop>
                    
                                }
                             {
                                 editpopup&&
                                 <EditPop>
                                    <Grid padding="20px">
                                    <Text>제목</Text>
                                        <Input
                                        
                                            value={title}
                                            placeholder="제목을 입력하세요."
                                            _onChange={(e)=>{
                                                setTitle(e.target.value);
                                            }}
                                        ></Input>
                                         <Text>내용</Text>
                                        <Input
                                        
                                        value={content}
                                        placeholder="내용을 입력하세요."
                                        _onChange={(e)=>{
                                            setContent(e.target.value);
                                        }}
                                        ></Input>
                                     <Text>비밀번호</Text>
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
                                                editPlan()
                                            }} >확인</Button>
                                    </Grid>
                                 </EditPop>
                             }
                      
                        
                </Grid>   
            </Grid>

        </React.Fragment>
    )
}

PlanDetail.defaultProps={
    planId : 1,
    title : "defaultprops",
    writer : "default작성자",
    content: "defalt목표의 내용",
    planPassword: "1234",
    createdAt : "2021-07-07T16:35:00",
    modifiedAt : "2021-07-07T16:35:00",
    countReply: 4
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

const EditPop = styled.div`
    width: 400px;
    height: 400px;
    position: absolute;
    margin: 0 auto;
    left: 50%;
    top: 50%;
    z-index:100;
    background-color: white;
    border-radius: 20px;
`;
export default PlanDetail;