import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const MealDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Button title="go Back to Categories" onPress={() => {
        props.navigation.popToTop(); // Go back to the root screen

      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailsScreen;