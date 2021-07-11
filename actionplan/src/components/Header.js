import React, {useEffect} from 'react';
import {Grid, Text, Button} from "../elements";
import { useDispatch, } from 'react-redux';
import {actionCreators} from "../redux/modules/plan";


const Header = (props) => {
    if (props.write){
        return (
            <Grid position="relative" padding="0 15px" display="flex" alignit="center" justify="center">
                <Grid left="30px" position="fixed">홈</Grid>
                <Text color="black" fontsize="30px">목표 세우기</Text>
                <Text></Text>
            </Grid>
        );
    }
    return (
        <Grid padding="0 15px" display="flex" alignit="center" justify="space-between">
            <Grid width="100px">홈</Grid>
            <Grid display="flex" alignit="center" flexdir="column">
                <Text color="black" fontsize="30px">오늘의 목표</Text>
                <Text padding="0" margin="0">2021.07.09</Text>
            </Grid>
        </Grid>
    );
}

Header.defaultProps ={
    write: false,
}
export default Header;