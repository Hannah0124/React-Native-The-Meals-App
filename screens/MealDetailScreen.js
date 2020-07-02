import React from 'react';
import { View, Text } from 'react-native';

const MealDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
    </View>
  );
};

const styles = StylesSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailsScreen;