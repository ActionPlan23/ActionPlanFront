import React from 'react';
import {Grid, Image} from "../elements";
import PlanList from '../pages/PlanList';
import PlanWrite from '../pages/PlanWrite';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from "react-router-dom";
import CommentsPage from '../pages/CommentsPage';

function App() {
  return (
    <React.Fragment>
      <Grid padding="0 0 0 0">
          <Route path="/" exact component={PlanList} />
          <Route path="/write" exact component={PlanWrite} />
          {/* <Route path="/write/:id" exact component={CommentsPage} />/ */}
          <Route path="/comments" exact component={CommentsPage} />
      </Grid>
    </React.Fragment>
  );
}

export default App;
