import React from 'react';
import { Grid, Text, } from '../elements';
const Plan = () => {
    return (
        <React.Fragment>
            <Grid border="1px solid black" margin="20px 0">
                <Grid padding="10px 20px">
                    <Text fontsize="20px" fontweight="bold" >운동_걷기</Text>
                    <Text >오늘 강변을 걷는데 사람이 많았어요. 다들 열심히 운동하시더라는..ㅎㅎ</Text>
                </Grid>
                <Grid display="flex" justify="space-between" bgcolor="darkgray" padding="0px 20px">
                    <Text>댓글 20</Text>
                    <Text>2021.07.09</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Plan;