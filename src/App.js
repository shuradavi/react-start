import React, { useState } from 'react';

import './components/PostItem.jsx';
import './styles/App.css';
import PostList from './components/PostList.jsx';
import PostForm from './components/UI/PostForm.jsx';
import MySelect from './components/UI/select/MySelect.jsx';

//56:11
function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      subtitle: 'Передние рычаги подвески',
      count: 2,
      pricePerCount: '100',
      brand: 'lemforder',
    },
    {
      id: 2,
      subtitle: 'Тормозной суппорт передний правый',
      count: 1,
      pricePerCount: '50',
      brand: 'brembo',
    },
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Получим post из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '10px 0' }} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          { value: 'subtitle', name: 'По названию' },
          { value: 'pricePerCount', name: 'По цене' },
        ]}
      />
      {posts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={posts}
          title={'Список запчастей СТО'}
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Корзина пуста</h1>
      )}
    </div>
  );
}

export default App;
