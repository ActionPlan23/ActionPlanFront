import React, {useEffect} from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from "react-router-dom";
import {history} from "../redux/configStore";
import { useDispatch, } from 'react-redux';
import {actionCreators} from "../redux/modules/plan";
import {Grid} from "../elements";
import PlanList from '../pages/PlanList';
import PlanWrite from '../pages/PlanWrite';
import CommentsPage from '../pages/CommentsPage';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionCreators.getPlansServer());
}, []);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Grid padding="0 0 0 0">
          <Route path="/" exact component={PlanList} />
          <Route path="/write" exact component={PlanWrite} />
          {/* <Route path="/comments/:id" exact component={CommentsPage} />/ */}
          <Route path="/comments" exact component={CommentsPage} />
        </Grid>
      </ConnectedRouter>
    </React.Fragment>
  );
} 

export default App;
