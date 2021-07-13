import React, {useEffect} from 'react';
import {Grid, Text, Button} from "../elements";
import { useDispatch, } from 'react-redux';
import {actionCreators} from "../redux/modules/plan";
import moment from "moment";


const Header = (props) => {

    let today =  moment().format("YYYY-MM-DD");
    if (props.write){
        return (
            <Grid position="relative" padding="0 15px" display="flex" alignit="center" justify="center">
                <Text color="black" fontsize="30px">목표 세우기</Text>
                <Text></Text>
            </Grid>
        );
    }
    return (
        <Grid height="200px"padding="0 15px" display="flex" alignit="center" justify="space-between">
            <Grid display="flex" alignit="center" flexdir="column">
                <Text color="black" fontsize="40px">오늘의 목표</Text>
                <Text padding="0" margin="0">{today}</Text>
            </Grid>
        </Grid>
    );
}

Header.defaultProps ={
    write: false,
}
export default Header;