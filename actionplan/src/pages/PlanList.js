import React from 'react';
import {Grid, Text} from "../elements";
import Plan from "../components/Plan";
import Header from '../components/Header';

const PlanList = () => {
    return (
        <React.Fragment>
            <Header></Header>
            <Grid padding="10px 30px">
                <Plan></Plan>
                <Plan></Plan>
                <Plan></Plan>
            </Grid>
        </React.Fragment>
    )
};

export default PlanList;