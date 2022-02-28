import React from "react";
import "./style.css";
import { FaUserFriends } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";

const AddPost = () => {
  return (
    <div className="feed-post-container">
      <div className="feed-post-header">
        <img
          className="header-photo"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        />
        <div className="header-description">
          <h4>Tom Russo</h4>
          <div className="min-icon">
            <span>5 mins</span>
            <div className="idn">
              <p className="idn-p">.</p>
              <FaUserFriends />
              <div className="o-icon">
                <IoIosMore />
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="post-content">
            <span>Not having fun at all :P</span>
            <img  className='post-content-img' src="https://images.unsplash.com/photo-1468465226960-8899e992537c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"/>
        </div>
        <div className="footer">
            <div className="icons">
            <AiFillLike color="#3b5998"/>
            <BsFillHeartFill color="red"/>
            <span className="span-f">39 likes</span>
            </div>

            <div className="other">
                <span>1 comment</span>
            </div>
        </div>

        <div className="like-section">
            <div className="section-l">
                 <AiFillLike  color="#3b5998"/> <span>Like</span>
            </div>
            <div className="section-l">
                <BiComment /> <span>Comment</span>
            </div>
        </div>
        <div className="comment-section">
            <div className="first-area-footer">

                <img className='img-section' src="https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg"/>
                <div className="comment">
                    <h1 className="h1-comment">Logan Paul</h1>
                    <span>Meh...</span>
                </div>
            </div>
            <div className="reply-section">
                <span>Like</span>
                <span>Reply</span>
                <span className="last-span">4 h</span>
            </div>
            <div className="write">
                <span>Write a comment...</span>
            </div>
        </div>
    </div>
  );
};

export default AddPost;
