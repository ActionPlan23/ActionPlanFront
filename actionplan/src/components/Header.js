import React, {useEffect} from 'react';
import {Grid, Text, Button} from "../elements";
import { useDispatch, } from 'react-redux';
import {actionCreators} from "../redux/modules/plan";
import moment from "moment";


const Header = (props) => {

    let today =  moment().format("YYYY년 MM월 DD일");
   
    return (
        <Grid margin="0px 0px 50px 0px"
        height="350px" display="flex"
       
        >
            <Grid display="flex" alignit="center" flexdir="column">
                <Text margin="80px 0px 30px 0px" color="black" fontsize="50px">오늘의 목표</Text>
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