import React from "react";
import PlanDetail from "../components/PlanDetail";
import { Grid, Input , Button} from "../elements";
import CommentList from "../components/CommentList"

const CommentsPage = (props) =>{
    return(
        <React.Fragment>
            {/* 임시 헤더 */}
            <Grid height="100px">
                댓글달기
            </Grid>
            <Grid is_flex padding="20px 100px">
                <Grid margin="0px 100px 0px 0px">
                    <PlanDetail/>
                </Grid>

                
                <Grid height="500px">
                    <Grid is_flex padding="20px 0px 0px 0px"margin="0px 0px 50px 0px">
                        <Input placeholder="댓글 달기"></Input>
                        <Button width="100px">작성</Button>
                    </Grid>
                  <CommentList/>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default CommentsPage;