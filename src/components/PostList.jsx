import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title }) => {
  // можем написать inline style <h1 style={{ textAlign: 'center' }}>Список запчастей</h1>
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostList;
