import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { createPost } from "../../actions/posts.actions";

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
    <form className="form" onSubmit={handleSubmit}>
      <h3>Creating a Memory</h3>
      <input
        className="form-input"
        name="creator"
        value={post.creator}
        placeholder="Creator"
        onChange={(e) => setPost({ ...post, creator: e.target.value })}
      />
      <input
        className="form-input"
        name="title"
        value={post.title}
        placeholder="Title"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <input
        className="form-input"
        name="message"
        value={post.message}
        placeholder="Message"
        onChange={(e) => setPost({ ...post, message: e.target.value })}
      />
      <input
        className="form-input"
        name="tags"
        value={post.tags}
        placeholder="Tags"
        onChange={(e) => setPost({ ...post, tags: e.target.value.split(",") })}
      />
      <label class="file-upload">
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setPost({ ...post, selectedFile: base64 })}
        />
        Custom Upload
      </label>
      <button type="submit">Submit</button>
      <button onClick={clear}>Clear</button>
    </form>
  );
};
export default Form;
