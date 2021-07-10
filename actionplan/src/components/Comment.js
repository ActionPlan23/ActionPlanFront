import React from "react";
import { Grid, Text, Button } from "../elements";

const Comment = (props) =>{
    return(
        <React.Fragment>
            <Grid is_flex border="1px solid black" margin="0px 0px 10px 0px">
                <Text>몇 만보 걸으셨나요?</Text>
                <Grid is_flex width="210px">
                <Button width="100px">수정</Button>
                <Button width="100px">삭제</Button>
                </Grid>
               
            </Grid>
        </React.Fragment>
    )
}

export default Comment;