/* Ye component me basically Card, tweets and other components rhega
 user data ka jo backend se fetch krke show krega */

import React from 'react';
import Card from './Card';
import '../css/Posts.css';

import posts from '../datasets/posts'; //Ye wala baad me backend k saath change hojaega

function Posts() {
  return (
    <div className="container">
        {posts.map((post) => (
          <div key={post.id}>
            <Card post={post} />
          </div>
        ))}
    </div>
  );
}

export default Posts