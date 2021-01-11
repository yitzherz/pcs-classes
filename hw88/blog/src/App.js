import React, {useState} from 'react';
import './App.css';
import Blogs from './blogs';
import Posts from './posts';
function App() {
  const [posts, setPosts] = useState([]);
  const getPosts = async (blog) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${blog.id}`);
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      const posts = await response.json();
      setPosts(posts);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Blogs onClick={getPosts} />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
