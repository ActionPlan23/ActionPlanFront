import React from "react";
import {Grid, Text, Button} from "../elements"
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import styled from "styled-components";
import { history } from "../redux/configStore";
import { useSelector, useDispatch } from "react-redux";

const PlanDetail = (props) =>{

   
    const [popup, handlePopup] = React.useState(false);
    console.log(props.title);
   
    return(
        <React.Fragment >
           <Button _onClick={()=>{
               history.goBack();
           }}>뒤로가기</Button>
            <Grid border="1px solid black" padding="20px" height="500px" 
             _onClick={()=>{
                handlePopup(false);
            }}>
               <Grid height="350px">
                   <Text fontsize="30px">{props.title}</Text>
                  
               
                <Text>{props.content}</Text>
               </Grid>
               
                 <Grid is_flex width="100px" >
                     <CreateIcon font-size="large" onClick={()=>{
                         handlePopup(true);
                     }}/>
                    <DeleteOutlineIcon font-size="large"/>
                    {popup && <PasswordPop/>}
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
    width: 500px;
    height: 300px;
    position: fixed;
    top: 100;
    left: 200;
    z-index:100;
    background-color: red;
`;
export default PlanDetail;