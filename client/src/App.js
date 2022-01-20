import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import { getPosts } from "./actions/posts.actions.js";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <Container>
      <h1 className="text-center title"> Memories</h1>
      <Container>
        <Row>
          <Col md={8}>
            <Posts setCurrentId={setCurrentId} />
          </Col>
          <Col md={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default App;
