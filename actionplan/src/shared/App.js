import React, {useEffect} from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from "react-router-dom";
import {history} from "../redux/configStore";
import { useDispatch, } from 'react-redux';
import {actionCreators as planActions} from "../redux/modules/plan";
import {Grid} from "../elements";
import Header from '../components/Header';
import PlanList from '../pages/PlanList';
import PlanWrite from '../pages/PlanWrite';
import CommentsPage from '../pages/CommentsPage';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(planActions.getPlansSV());
}, []);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Grid padding="0 0 0 0" bgcolor="#F1F2F6">
          <Header></Header>
          <Route path="/" exact component={PlanList} />
          <Route path="/write" exact component={PlanWrite} />
          {/* <Route path="/comments/:id" exact component={CommentsPage} />/ */}
          <Route path="/comments" exact component={CommentsPage} />
          <Route path="/comments/:id" exact component={CommentsPage} />
        </Grid>
      </ConnectedRouter>
    </React.Fragment>
  );
} 

export default App;
