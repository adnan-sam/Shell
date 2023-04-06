import React from 'react';
import '../css/Card.css';

const Card = (props) => {
  const { post } = props;
  const { image, username, comments, likes, title, caption } = post;

  if (!post) {
    return(
        <div className='null'>
            <h3>Oops, Post Not Available!!</h3>
        </div>
    ); // or return an error message or a loading spinner
  }

  
  return (
    <div className="card-container">
      <div className="card-header">
        <img className="card-avatar" src={image} alt="User Avatar" />
        <div className="card-username">{username}</div>
      </div>
      <div className="card-image-container">
        <img className="card-image" src={image} alt="Post" />
      </div>
      <div className="card-body">
        <div className="card-likes">{likes} likes</div>
        <div className="card-caption">
          <span className="card-username">{username}:</span> {caption}
        </div>
        <div className="card-comments">
        {comments} comments
          {/* {comments.map((comment, index) => (
            <div key={index}>
              <span className="card-username">{comment.user}:</span> {comment.text}
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Card;

