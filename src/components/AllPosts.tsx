import {Text, View} from 'react-native';
import React from 'react';
import useAllPosts from '../hooks/useAllPosts';

const AllPosts = () => {
  const {posts} = useAllPosts();
  console.log('posts:', posts);
  return (
    <View>
      <Text>AllPosts</Text>
    </View>
  );
};

export default AllPosts;
