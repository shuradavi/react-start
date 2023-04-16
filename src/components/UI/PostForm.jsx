import { useState } from 'react';
import MyInput from './input/MyInput';
import MyButton from './button/MyButton';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    brand: '',
    subtitle: '',
    count: '',
    pricePerCount: '',
  });

  const addNewItem = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ brand: '', subtitle: '', count: '', pricePerCount: '' });
  };

  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput
        value={post.subtitle}
        onChange={(e) => setPost({ ...post, subtitle: e.target.value })}
        type="text"
        placeholder="Название товара"
      />
      <MyInput
        value={post.brand}
        onChange={(e) => setPost({ ...post, brand: e.target.value })}
        type="text"
        placeholder="Производитель"
      />
      <MyInput
        value={post.count}
        onChange={(e) => setPost({ ...post, count: e.target.value })}
        type="text"
        placeholder="Количество"
      />
      <MyInput
        value={post.pricePerCount}
        onChange={(e) => setPost({ ...post, pricePerCount: e.target.value })}
        type="text"
        placeholder="Цена за шт. ($)"
      />
      <MyButton onClick={addNewItem}>Добавить в корзину</MyButton>
    </form>
  );
};

export default PostForm;
