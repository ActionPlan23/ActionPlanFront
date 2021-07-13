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
            <Grid>
            <Grid width="150px" display="flex" margin="0 auto" >
                <Button 
                    margin="0 13px 0 0" _onClick={getToday}
                    shadow="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
                    hovershadow="rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"

                    >Today</Button>
                    
               <Button margin="0 13px 0 0" _onClick={getPast} 
                  shadow="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
                  hovershadow="rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                  
               >Past</Button>
              
            </Grid>
            </Grid>
         
            <div style={{justifyContent:"center",margin:"0 auto",maxWidth:"900px",display:"grid", gridTemplateColumns:"repeat(3,1fr)"}} >
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
            </div>
        </React.Fragment>
    )
};

export default PlanList;