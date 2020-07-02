import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const CategoryMeal = props => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Button title="Go to Details!" onPress={() => {
        props.navigation.navigate({routeName: 'MealDetail'});
      }} />
      <Button title="Go Back" onPress={() => {
        // props.navigation.goBack();

        // Same as above
        props.navigation.pop();
      }} />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMeal;