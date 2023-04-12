import React, { useState, useRef } from 'react';

import './components/PostItem.jsx';
import './styles/App.css';
import PostItem from './components/PostItem.jsx';
import PostList from './components/PostList.jsx';
import MyButton from './components/UI/button/MyButton.jsx';
import MyInput from './components/UI/input/MyInput.jsx';

//56:11
function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      subtitle: 'Передние рычаги подвески',
      count: 2,
      pricePerCount: '100$',
      brand: 'lemforder',
    },
    {
      id: 2,
      subtitle: 'Тормозной суппорт передний правый',
      count: 1,
      pricePerCount: '50$',
      brand: 'brembo',
    },
  ]);

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const bodyInputRef = useRef();

  const addNewItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      title,
      subtitle,
    };
    setPosts([...posts, newItem]);
    setTitle('');
    setSubtitle('');
  };

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Модель автомобиля"
        />
        <MyInput
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          type="text"
          placeholder="Название товара"
        />
        {/* Неуправляемый/неконтролируемый компонент */}
        {/* <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Название товара"
        /> */}
        <MyButton onClick={addNewItem}>Добавить в корзину</MyButton>
      </form>
      <PostList
        posts={posts}
        title={'Список запчастей СТО'}
      />
    </div>
  );
}

export default App;
