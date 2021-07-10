import React from 'react';
import { useState } from 'react';
import {Button, Grid, Image, Input, Text} from "../elements";
import Header from '../components/Header';

const PlanWrite = (props) => {
  const [click, setClick] = useState(false);
  console.log(click,"beforeClick");
  const checkPW = () => {
    console.log(click,"beforeSetClick");

    setClick(true);
    console.log(click,"afterSetClick");
  }
  
    return (
<React.Fragment>

{/* 
  <Grid padding="16px" display="flex" flexdir="row" justify="center">
    <Button width="100px" _onClick={()=>checkPW}>저장</Button>
  </Grid>
  {click? (<Input>비밀번호를 입력하세요. </Input>) : } */}

      <Header write></Header>
        <Grid padding="16px">
            <Input placeholder="내용을 입력하세요."
                textarea height="200px">
                <Text fontsize="25px" fontweight="bold">
                    오늘의 목표
                </Text>
            </Input>
        </Grid>

        <Grid padding="16px">
            <Input placeholder="내용을 입력하세요.">
                <Text fontsize="25px" fontweight="bold">
                    비밀번호
                </Text>
            </Input>
        </Grid>

        <Grid padding="16px" display="flex" flexdir="row" justify="center">
            <Button width="100px">저장</Button>
        </Grid>







      </React.Fragment>
    );
  };
  
  export default PlanWrite;  