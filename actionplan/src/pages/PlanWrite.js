import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {history} from "../redux/configStore";

import {actionCreators as planActions} from "../redux/modules/plan";

import {Button, Grid, Input, Text} from "../elements";
import Header from '../components/Header';

const PlanWrite = (props) => {
  const [click, setClick] = useState(false);
  console.log(click,"beforeClick");


  const [writer,setWriter] = useState("");
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const [password,setPassword] = useState("");

  const dispatch = useDispatch();

  const addPlan = () => {
    dispatch(planActions.addPlanServer(plan));
    history.push("/")
    console.log(plan,"작성한 플랜");
  }
    const plan = {
    title : title,
    writer: writer,
    content : content,
    planPassword: password,
  }

    return (
<React.Fragment>

{/* 
  <Grid padding="16px" display="flex" flexdir="row" justify="center">
    <Button width="100px" _onClick={()=>checkPW}>저장</Button>
  </Grid>
  {click? (<Input>비밀번호를 입력하세요. </Input>) : } */}

        <Grid 
        padding="30px 40px"
        margin="0 auto" 
        width="600px" 
        height="800px" 
        bgcolor="white"
        border_radius="30px"
        shadow="rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
        >
        
          <Grid flexdir="column" margin="0px 0px 30px 0px">
            <Input placeholder="제목을 입력하세요."
                height="200px"
                _onChange={(e)=>{
                  setTitle(e.target.value);
              }}
                value={title}>
                <Text fontsize="15px" fontweight="bold">
                    제목
                </Text>
            </Input>
          </Grid>

          <Grid flexdir="column" margin="0px 0px 30px 0px">
            <Input placeholder="작성자를 입력하세요."
                height="200px"
                _onChange={(e)=>{
                  setWriter(e.target.value);
              }}
                value={writer}>
                <Text fontsize="15px" fontweight="bold">
                    작성자
                </Text>
            </Input>
            </Grid>

            <Grid margin="0px 0px 30px 0px">
            <Input placeholder="내용을 입력하세요."
                textarea height="200px"
                _onChange={(e)=>{
                  setContent(e.target.value);
              }}
                value={content}>
                <Text fontsize="15px" fontweight="bold">
                    내용
                </Text>
            </Input>
            </Grid>

            <Grid margin="0px 0px 30px 0px">
            <Input placeholder="비밀번호를 입력하세요."
              _onChange={(e)=>{
                setPassword(e.target.value);
            }}
              value={password}
              type="password"
              onSubmit={addPlan}>
             
                <Text fontsize="15px" fontweight="bold">
                    비밀번호
                </Text>
            </Input>
            </Grid>
            <Grid>

            <Grid padding="16px" display="flex" flexdir="row" justify="center">
            <Button width="100px" _onClick={()=>{
              if(   title ==="" || writer===""|| content==="" || password ===""){
                window.alert("다시확인해주세요!")
              }else{
                addPlan()
              }
           
            }}
              shadow="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
              hovershadow="rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
              
            >저장</Button>
        </Grid>
          </Grid>

        
      
        </Grid>   

      </React.Fragment>
    );
  };
  
  export default PlanWrite;  