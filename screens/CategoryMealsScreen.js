import React from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId'); // from CategoriesScreen.js

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
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

// Important to update the header!
CategoryMealsScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData);
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;