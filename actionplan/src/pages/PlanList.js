import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Grid, Text, Button} from "../elements";
import Plan from "../components/Plan";
import Header from '../components/Header';

const PlanList = () => {
    const today_list = useSelector(state=>state.plan.today_list);
    const past_list = useSelector(state=>state.plan.past_list);
    const all_list = useSelector(state=>state.plan.all_list);

    const [ list, setList ] = useState("");

    const getToday = () => {
        setList(today_list);
    }
    const getPast = () => {
        setList(past_list);
    }
    const getAll = () => {
        setList(all_list);
    }
    console.log(today_list,"initial_todaylist")
    console.log(list,"initail_list")

    return (
        <React.Fragment>
            <Header></Header>
            <Grid width="150px" display="flex" justify="start">
                <Button margin="0 13px 0 0" _onClick={getToday} >오늘</Button>
                <Button margin="0 13px 0 0" _onClick={getPast} >과거</Button>
                <Button margin="0 13px 0 0" _onClick={getAll} >전체</Button>
            </Grid>
            <Grid padding="10px 30px">
            {list==="" ? 
                today_list.map((item)=>{
                  return (<Plan {...item}></Plan>)
              }) : 
                list.map((item)=>{
                  return (<Plan {...item}></Plan>)
              })
            }
            </Grid>
        </React.Fragment>
    )
};

export default PlanList;