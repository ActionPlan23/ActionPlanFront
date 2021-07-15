import React, {useEffect} from 'react';
import {Grid, Text, Button} from "../elements";
import { useDispatch, } from 'react-redux';
import {actionCreators} from "../redux/modules/plan";
import moment from "moment";


const Header = (props) => {

    let today =  moment().format("YYYY-MM-DD");
   
    return (
        <Grid 
        height="350px" display="flex" 
       
        >
            <Grid display="flex" alignit="center" flexdir="column">
                <Text color="black" fontsize="40px">오늘의 목표</Text>
                <Text color="black" fontsize="25px">오늘의 목표를 적고 사람들과 공유하세요!</Text>
                <Text padding="0" margin="0" fontsize="25px">{today}</Text>
            </Grid>
        </Grid>
    );
}

Header.defaultProps ={
    write: false,
}
export default Header;