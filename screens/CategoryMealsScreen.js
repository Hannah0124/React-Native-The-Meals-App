import React from 'react';
import { View, Text } from 'react-native';

const CategoryMeal = props => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
    </View>
  )
};

const styles = StylesSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMeal;