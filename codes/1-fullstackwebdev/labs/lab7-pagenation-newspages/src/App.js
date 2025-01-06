import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Pagenation from './components/Pagenation';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const res = await axios.get(url);
      console.log(res.data);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, [currentPage, postsPerPage]); // useEffect is a hook that allows us to perform side effects in our component

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="title">My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagenation
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
        setPostsPerPage={setPostsPerPage}
      />
    </div>
  );
}

export default App;
