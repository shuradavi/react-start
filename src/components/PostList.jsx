import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({ posts, title, remove }) => {

	if (!posts.length) {
		return (
			<h1 style={{ textAlign: 'center', marginTop: '20px' }}> 
				В корзине пусто!
			</h1>
		)
	}
	
	return (
	  //  используем инлайн стиль    style = { { textAlign: 'center', ... } }
	  <div>
			<h1 style={{ textAlign: 'center', margin: '20px' }}>{title}</h1>
			<TransitionGroup>
				{posts.map((post, index) => (
				<CSSTransition
					key={post.id}
					timeout={500}
					classNames="post"
				>
        			<PostItem
          				remove={remove}
          				number={index + 1}
          				post={post}
					/>
				</CSSTransition>
      		))}
			</TransitionGroup>
    </div>
  );
};

export default PostList;
