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
            <Grid >
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
    align-items: center;
    margin: 0 auto;
    display: grid;
    grid-template-columns : repeat(4, 1fr);
    max-width: 80vw;
    border-radius: 50px;
`;

const OutterBox = styled.div`
    ${(props) => (props.is_today ? `background: white;` : `background: white;`)}
    border-radius: 50px;
    max-width: 90vw;
    margin: 0 auto;
    padding: 80px 0 ;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    
`;

const ButtonBox = styled.div`
    ${(props) => (props.is_today ? `background: white;` : '' )}
    ${(props) => (props.is_past ? `background: white;` : '' )}
    width: 140px;
    height: 80px;
    border-radius: 50px 50px 20px 0px;
    text-align: center;
    position: relative;
 
    &:before{
        content: "";
        position: absolute;
        background-color: transparent;
        bottom: 0px;
        left: -50px;
        height: 25px;
        width: 50px;
        border-bottom-right-radius: 25px;
        ${(props) => (props.is_today ? ` box-shadow: 25px 0px 0 0 white;` : '' )}
        ${(props) => (props.is_past ? ` box-shadow: 25px 0px 0 0 white ;` : '' )}
      
    }
    &:after{
        content: "";
        position: absolute;
        background-color: transparent;
        bottom: 0px;
        left: 140px;
        height: 25px;
        width: 55px;
        border-bottom-left-radius: 25px;
        ${(props) => (props.is_today ? ` box-shadow: -35px 1px  0 white;` : '' )}
        ${(props) => (props.is_past ? ` box-shadow: -31px 0px 0 0 white ;` : '' )}
      
    }
`;



export default PlanList;