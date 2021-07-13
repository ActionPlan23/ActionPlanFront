import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Grid, Text, Button} from "../elements";
import Plan from "../components/Plan";
import Header from '../components/Header';
import { history } from '../redux/configStore';
import { actionCreators as planActions } from '../redux/modules/plan';

const PlanList = () => {
    const dispatch = useDispatch();
    const today_list = useSelector(state=>state.plan.today_list);
    const past_list = useSelector(state=>state.plan.past_list);
    

    const [ list, setList ] = useState("");

    const getToday = () => {
        setList(today_list);
    }
    const getPast = () => {
        setList(past_list);
    }
   
    console.log(today_list,"initial_todaylist")
    console.log(list,"initail_list")

    return (
        <React.Fragment>
            <Grid margin="80px 0px">
            <Grid width="150px" display="flex" margin="0 auto" >
                <Button margin="0 13px 0 0" _onClick={getToday} >Today</Button>
                <Button margin="0 13px 0 0" _onClick={getPast} >Past</Button>
              
            </Grid>
            </Grid>
         
            <Grid padding="10px 130px" display="flex">
            {list==="" ? 
                today_list.map((p, idx)=>{
                  return (
                  <Plan key={p.planId} {...p}>
                  </Plan>)
              }) : 
                list.map((p, idx)=>{
                  return (<Plan {...p}></Plan>)
              })
            }
            </Grid>
            <Button _onClick={
                ()=>{history.push("/write")}
            }>추가하기</Button>
        </React.Fragment>
    )
};

export default PlanList;