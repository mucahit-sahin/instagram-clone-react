import React from "react";
import { Comment, Direct, Heart, More, Saved, Smile } from "../icons";
import "./Post.scss";
const Post = ({
  userImage,
  username,
  displayName,
  postImage,
  postDescription,
}) => {
  return (
    <article className="post">
      <header className="postHeader">
        <div className="postUserImage">
          <img src={userImage} alt="userimage" />
        </div>
        <div className="postUsername">
          <span>{username}</span>
        </div>
        <div className="headerMore">
          <More />
        </div>
      </header>
      <div className="postImage">
        <img src={postImage} alt="Postimage" />
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
          <span>{username}</span>&nbsp;
          <span>{postDescription}</span>
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
    </article>
  );
};

export default Post;
