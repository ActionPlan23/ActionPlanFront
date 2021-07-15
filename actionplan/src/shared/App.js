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

  const getRandomColor = function(_isAlpha) {
    let r = getRand(0, 255),
    g = getRand(0, 255),
    b = getRand(0, 255),
    a = getRand(0, 10) / 10;
  
    let rgb = _isAlpha ? 'rgba' : 'rgb';
    rgb += '(' + r + ',' + g + ',' + b;
    rgb += _isAlpha ? ',' + a + ')' : ')';
  
    return rgb;
  
    // Return random number from in to max
    function getRand(min, max) {
      if (min >= max) return false;
      return ~~(Math.random() * (max - min + 1)) + min;
    };
  };

  let bgcolorrandom = getRandomColor(true);

  useEffect(()=>{
    dispatch(planActions.getPlansSV());
}, []);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Grid bgcolor= {bgcolorrandom} padding="10px 10px 150px 10px">
        {/* <Grid padding="20px 0px 0px 20px" bgcolor= {bgcolorrandom} justify="center"margin="0 auto"> */}
          <a title="깃허브 보러가기"href="https://github.com/ActionPlan23"><GitHubIcon fontSize="large"/></a>
          {/* </Grid> */}
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
