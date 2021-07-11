import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {history} from "../redux/configStore";

import {actionCreators} from "../redux/modules/plan";

import {Button, Grid, Input, Text} from "../elements";
import Header from '../components/Header';

const PlanWrite = (props) => {
  const [click, setClick] = useState(false);
  console.log(click,"beforeClick");
  const checkPW = () => {
    console.log(click,"beforeSetClick");

    setClick(true);
    console.log(click,"afterSetClick");
  }

  const [writer,setWriter] = useState("");
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const [password,setPassword] = useState("");

  const dispatch = useDispatch();

  const addPlan = () => {
    dispatch(actionCreators.addPlanServer(plan));
    console.log(plan,"작성한 플랜");
    history.replace("/");
  }
    const plan = {
    "title" : title,
    "writer" : writer,
    "content" : content,
    "planPassword": password,
  }

    return (
<React.Fragment>

{/* 
  <Grid padding="16px" display="flex" flexdir="row" justify="center">
    <Button width="100px" _onClick={()=>checkPW}>저장</Button>
  </Grid>
  {click? (<Input>비밀번호를 입력하세요. </Input>) : } */}

      <Header write></Header>
        <Grid padding="16px" display="flex">
          <Grid display="flex" flexdir="column">
            <Input placeholder="제목을 입력하세요."
                height="200px"
                _onChange={(e)=>{
                  setTitle(e.target.value);
              }}
                value={title}>
                <Text fontsize="25px" fontweight="bold">
                    제목
                </Text>
            </Input>
          </Grid>
          <Grid display="flex" flexdir="column">
            <Input placeholder="작성자를 입력하세요."
                height="200px"
                _onChange={(e)=>{
                  setWriter(e.target.value);
              }}
                value={writer}>
                <Text fontsize="25px" fontweight="bold">
                    작성자
                </Text>
            </Input>
          </Grid>
        </Grid>      
        <Grid padding="16px">
            <Input placeholder="내용을 입력하세요."
                textarea height="200px"
                _onChange={(e)=>{
                  setContent(e.target.value);
              }}
                value={content}>
                <Text fontsize="25px" fontweight="bold">
                    내용
                </Text>
            </Input>
        </Grid>

        <Grid padding="16px">
            <Input placeholder="비밀번호를 입력하세요."
              _onChange={(e)=>{
                setPassword(e.target.value);
            }}
              value={password}>
                <Text fontsize="25px" fontweight="bold">
                    비밀번호
                </Text>
            </Input>
        </Grid>

        <Grid padding="16px" display="flex" flexdir="row" justify="center">
            <Button width="100px" _onClick={addPlan}>저장</Button>
        </Grid>







      </React.Fragment>
    );
  };
  
  export default PlanWrite;  