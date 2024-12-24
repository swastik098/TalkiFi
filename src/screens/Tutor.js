import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Tutor = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Tutor</Text>
      <Text>Learn languages in real-time with AI.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Tutor;
