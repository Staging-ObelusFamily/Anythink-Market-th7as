import agent from "../../agent";
import { useState } from 'react';
import { ADD_COMMENT } from "../../constants/actionTypes";

function CommentInput(props) {
  const [body, setBody] = useState("");
    
  const updateBody = (ev) => setBody(ev.target.value)


  const createComment = (ev) => {
    ev.preventDefault();
    const payload = agent.Comments.create(props.slug, { body });
    setBody("");
    dispatch({ type: ADD_COMMENT, payload })
  };


  return (
    <form className="card comment-form m-2" onSubmit={createComment}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          value={body}
          onChange={updateBody}
          rows="3"
        ></textarea>
      </div>
      <div className="card-footer">
        <img
          src={props.currentUser.image}
          className="user-pic mr-2"
          alt={props.currentUser.username}
        />
        <button className="btn btn-sm btn-primary" type="submit">
          Post Comment
        </button>
      </div>
    </form>
  );
}

export default CommentInput;
