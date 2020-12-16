import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Carousel from './Carousel';

const images = [
  'https://images.pexels.com/photos/2115695/pexels-photo-2115695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/4159435/pexels-photo-4159435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/5991465/pexels-photo-5991465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <Text>Carousel</Text>
      <Carousel images={images} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});

export default App;
