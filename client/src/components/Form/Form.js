import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { createPost } from "../../actions/posts.actions";
import "./styles.css";

const Form = () => {
  const [post, setPost] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(post);
    dispatch(createPost(post));
  };

  const clear = () => {};

  return (
    <Paper>
      <form noValidate onSubmit={handleSubmit}>
        <Typography variant="h6" align="center">
          Creating a Memory
        </Typography>
        <TextField
          className="input"
          fullWidth
          name="creator"
          value={post.creator}
          label="Creator"
          onChange={(e) => setPost({ ...post, creator: e.target.value })}
        />
        <TextField
          className="input"
          fullWidth
          name="title"
          value={post.title}
          label="Title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <TextField
          className="input"
          fullWidth
          name="message"
          value={post.message}
          label="Message"
          onChange={(e) => setPost({ ...post, message: e.target.value })}
        />
        <TextField
          className="input"
          fullWidth
          name="tags"
          value={post.tags}
          label="Tags"
          onChange={(e) =>
            setPost({ ...post, tags: e.target.value.split(",") })
          }
        />
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPost({ ...post, selectedFile: base64 })}
          />
        </div>
        <Button type="submit" fullWidth>
          Submit
        </Button>
        <Button onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};
export default Form;
