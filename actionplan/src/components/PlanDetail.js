import React from "react";
import {Grid, Text, Button} from "../elements"
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import styled from "styled-components";

const PlanDetail = (props) =>{
    const [popup, handlePopup] = React.useState(false);
    return(
        <React.Fragment 
       >
            <Grid border="1px solid black" padding="20px" height="500px" 
             _onClick={()=>{
                handlePopup(false);
            }}>
               <Grid height="350px">
                   <Text fontsize="30px">[운동]걷기</Text>
                  
               
                <Text>오늘 강변을 걷는데 사람이 많았어요...! 다들 열심히 운동하시더라는ㅎㅎ</Text>
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