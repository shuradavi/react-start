import React, { useState } from 'react';
import axios from 'axios';
import './components/PostItem.jsx';
import './styles/App.css';
import PostList from './components/PostList.jsx';
import PostForm from './components/UI/PostForm.jsx';
import PostFilter from './components/PostFilter.jsx';
import MyModal from './components/MyModal/MyModal.jsx';
import MyButton from './components/UI/button/MyButton.jsx';
import { usePosts } from './components/hooks/usePosts.js';

//56:11
function App() {
  	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  
  	const createPost = (newPost) => {
			setPosts([...posts, newPost]);
			setModal(false)
	};
	
	async function fetchPosts() {
		const response = await new Promise(resolve => resolve({ data: [
			{
			  "userId": 1,
			  "id": 1,
			  "subtitle": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			  "brand": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
			},
			{
			  "userId": 1,
			  "id": 2,
			  "subtitle": "qui est esse",
			  "brand": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
			},
			{
			  "userId": 1,
			  "id": 3,
			  "subtitle": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
			  "brand": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
			},
			{
			  "userId": 1,
			  "id": 4,
			  "subtitle": "eum et est occaecati",
			  "brand": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
			},
			{
			  "userId": 1,
			  "id": 5,
			  "subtitle": "nesciunt quas odio",
			  "brand": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
			},
			{
			  "userId": 1,
			  "id": 6,
			  "subtitle": "dolorem eum magni eos aperiam quia",
			  "brand": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
			},
			{
			  "userId": 1,
			  "id": 7,
			  "subtitle": "magnam facilis autem",
			  "brand": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
			},
			{
			  "userId": 1,
			  "id": 8,
			  "subtitle": "dolorem dolore est ipsam",
			  "brand": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
			},
			{
			  "userId": 1,
			  "id": 9,
			  "subtitle": "nesciunt iure omnis dolorem tempora et accusantium",
			  "brand": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
			},
			{
			  "userId": 1,
			  "id": 10,
			  "subtitle": "optio molestias id quia eum",
			  "brand": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
			}]}))
		console.log(response.data);
		setPosts(response.data)
	}

  	// Получим post из дочернего элемента
  	const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  	};

	return (
		<div className="App">
			<MyButton onClick={fetchPosts} style={{ marginRight: '15px' }}>
				Отправить запрос
			</MyButton>
			<MyButton
				style={{ marginTop: '15px' }}
				onClick={() => setModal(true)}
			>
				Найти товар
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{ margin: '15px 0' }} />
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
        	<PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список запчастей СТО'} />
    	</div>
  );
}

export default App;
