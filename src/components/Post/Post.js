import React from "react";
import { Comment, Direct, Heart, More, Saved, Smile } from "../icons";
import "./Post.scss";
const Post = () => {
  return (
    <div className="post">
      <header className="postHeader">
        <div className="postUserImage">
          <img src="https://picsum.photos/200" alt="userimage" />
        </div>
        <div className="postUsername">
          <span>Mucahitsah</span>
        </div>
        <div className="headerMore">
          <More />
        </div>
      </header>
      <div className="postImage">
        <img src="https://picsum.photos/500" alt="Postimage" />
      </div>
      <div className="postContent">
        <div className="postActions">
          <div>
            <Heart />
          </div>
          <div>
            <Comment />
          </div>
          <div>
            <Direct />
          </div>
          <div>
            <Saved />
          </div>
        </div>
        <div className="postRecentLiked">
          Liked by
          <span>&nbsp;cnecati</span>&nbsp;and
          <span>&nbsp;others</span>
        </div>
        <div className="postDescription">
          <span>mucahitsah</span>&nbsp;
          <span>güzel bir gün</span>
        </div>
        <div className="postComments">
          <span className="postCommentsMoreCount">View all 4 comments</span>
          <div className="postComment">
            <span>cnecati</span>&nbsp;
            <span>güzel</span>
            <Heart />
          </div>
          <div className="postComment">
            <span>mehmet</span>&nbsp;
            <span>güzel</span>
            <Heart />
          </div>
        </div>
        <div className="postDate">
          <span>6 Hours Ago</span>
        </div>
        <div className="postCommentInput">
          <Smile />
          <input type="text" placeholder="Add a comment" />
          <button disabled>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
