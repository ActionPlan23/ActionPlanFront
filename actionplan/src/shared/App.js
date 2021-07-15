import React, {useEffect} from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from "react-router-dom";
import {history} from "../redux/configStore";
import { useDispatch, } from 'react-redux';
import {actionCreators as planActions} from "../redux/modules/plan";
import {Grid, Button} from "../elements";
import Header from '../components/Header';
import PlanList from '../pages/PlanList';
import PlanWrite from '../pages/PlanWrite';
import CommentsPage from '../pages/CommentsPage';
import GitHubIcon from '@material-ui/icons/GitHub';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(planActions.getPlansSV());
}, []);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Grid bgcolor="#F3E5ED" padding="0px 0px 150px 0px">
        <Grid padding="20px 0px 0px 20px" bgcolor="#F3E5ED" justify="center"margin="0 auto">
          <a title="깃허브 보러가기"href="https://github.com/ActionPlan23"><GitHubIcon fontSize="large"/></a>
          </Grid>
          <Header></Header>
          <Route path="/" exact component={PlanList} />
          <Route path="/write" exact component={PlanWrite} />
          {/* <Route path="/comments/:id" exact component={CommentsPage} />/ */}
          <Route path="/comments" exact component={CommentsPage} />
          <Route path="/comments/:id" exact component={CommentsPage} />
        
       </Grid>
    
        <Button
        position
        _onClick={
          ()=>{history.push("/write")}
      }
        >+</Button>
       
      </ConnectedRouter>
    </React.Fragment>
  );
} 

export default App;
