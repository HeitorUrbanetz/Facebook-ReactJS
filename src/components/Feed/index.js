import React from "react";
import "./style.css";
import Stories from "./Stories";
import Add from "./Add";
import AddPost from "./AddPost";

const Feed = () => {
  return (
    <div className="feed-container">
      <div className="top">
        <h1 className="top-h1">Stories</h1>
        <h4 className="top-h4">See All</h4>
      </div>

      <div className="feed-content">
        <div className="storie-feed">
          <Stories />
        </div>

        <div className="post">
          <Add />
        </div>

        <div className="add-post-feed">
            <AddPost />
        </div>

        
      </div>
    </div>
  );
};

export default Feed;
