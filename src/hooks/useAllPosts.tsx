import React, {useEffect} from 'react';

const useAllPosts = () => {
  const [posts, setPosts] = React.useState([]);
  const fetchPosts = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const response = await res.json();
      setPosts(response.products);
    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return {
    posts,
  };
};

export default useAllPosts;
