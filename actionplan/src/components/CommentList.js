import React from "react";
import { Grid } from "../elements";
import Comment from "./Comment";

const CommentList = (props) =>{
    return(
        <React.Fragment>
            {/* Grid에 overflow필요 */}
            <Grid>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
                    
            </Grid>
        </React.Fragment>
    )
}

export default CommentList;