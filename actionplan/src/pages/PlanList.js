import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Grid, Text, Button} from "../elements";
import Plan from "../components/Plan";
import Header from '../components/Header';
import { history } from '../redux/configStore';
import { actionCreators as planActions } from '../redux/modules/plan';
import styled from 'styled-components';

const PlanList = () => {
    const dispatch = useDispatch();
    const today_list = useSelector(state=>state.plan.today_list);
    const past_list = useSelector(state=>state.plan.past_list);
    
    const [is_today, setIsToday]= useState(true);
    const [is_past, setIsPast]= useState(false);

    const [ list, setList ] = useState("");

    const getToday = () => {
        setList(today_list);
    }
    const getPast = () => {
        setList(past_list);
    }


    return (
        <React.Fragment>
            <Grid>
            <Grid justify="center" width="500px" display="flex" margin="0 auto" >
               
                <ButtonBox 
                    is_today={is_today}
                    onClick={()=>{ 
                        setIsToday(true);
                        setIsPast(false);
                        getToday();
                    }}>
                  <Text fontsize="30px">Today</Text>

                {/* <Button 
                    margin="0 13px 0 0" _onClick={getToday}
                    shadow="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
                    hovershadow="rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"

                    >Today</Button> */}
                </ButtonBox>
             
                <ButtonBox
                    is_past={is_past}
                    onClick={()=>{
                        setIsPast(true);
                        setIsToday(false);
                        getPast();
                    }}
                >  <Text fontsize="30px">Past</Text>
               {/* <Button margin="0 13px 0 0" _onClick={getPast} 
                  shadow="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
                  hovershadow="rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                  
               >Past</Button> */}
              </ButtonBox> 
            </Grid>
            </Grid>
         
         <OutterBox is_today={is_today}>
            <GridBox >
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
            </GridBox>
            </OutterBox>
        </React.Fragment>
    )
};

const GridBox = styled.div`
    justify-content: center;
    margin: 0 auto;
    display: grid;
    grid-template-columns : repeat(3, 1fr);
    max-width: 80vw;
    border-radius: 50px;
`;

const OutterBox = styled.div`
    ${(props) => (props.is_today ? `background: blue;` : `background: yellow;`)}
    border-radius: 50px;
    max-width: 90vw;
    margin: 0 auto;
    padding: 30px 0 0 0 ;
    
`;

const ButtonBox = styled.div`
    ${(props) => (props.is_today ? `background: blue;` : '' )}
    ${(props) => (props.is_past ? `background: yellow;` : '' )}
    width: 140px;
    height: 70px;
    border-radius: 50px 50px 0 0;
    text-align: center;
`;


export default PlanList;