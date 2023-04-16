import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
  const { id, subtitle, brand, count, pricePerCount } = props.post;

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {subtitle}
        </strong>
        <div>Производитель: {brand}</div>
        <div>Количество {count} шт.</div>
        <div>Цена за шт. {pricePerCount}$</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
