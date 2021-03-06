import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {

  const renderMealItem = itemData => {
    return (
      <MealItem 
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {}}
      />
    );
  };

  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        // keyExtractor={(item, index) => item.id} // for older version
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

// Important to update the header!
CategoryMealsScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData);
  const catId = navigationData.navigation.getParam('categoryId'); // from CategoriesScreen.js

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
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



{/* <Text>The Category Meal Screen!</Text>
  <Text>{selectedCategory.title}</Text>
  <Button 
    title="Go to Details!" 
    onPress={() => {
      props.navigation.navigate({routeName: 'MealDetail'});
    }} 
  />
  <Button title="Go Back" onPress={() => {
    // props.navigation.goBack();

    // Same as above
    props.navigation.pop();
  }} /> */}