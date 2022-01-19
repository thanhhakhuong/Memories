import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";

const Posts = () => {
  // state.posts from reducers and get through useSelector hook
  const posts = useSelector((state) => state.posts);
  return (
    <div>
      <h1>Posts</h1>
      <Grid>
        <Post />
        <Post />
      </Grid>
    </div>
  );
};
export default Posts;
