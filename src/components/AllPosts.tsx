import {Text, View} from 'react-native';
import React, {useEffect} from 'react';

const AllPosts = () => {
  const fetchPosts = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const response = await res.json();
      console.log('response:', response.products);
    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View>
      <Text>AllPosts</Text>
    </View>
  );
};

export default AllPosts;
