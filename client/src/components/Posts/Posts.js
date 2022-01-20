import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import Post from "./Post/Post";

const Posts = () => {
  // state.posts from reducers and get through useSelector hook
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Container fluid>
      {posts.map((post) => (
        <Col key={post._id} xs={12} sm={8} md={5}>
          <Post post={post} />
        </Col>
      ))}
    </Container>
  );
};
export default Posts;
