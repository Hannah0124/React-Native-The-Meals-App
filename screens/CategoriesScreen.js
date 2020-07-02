import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const CategoriesScreen = props => {
  // console.log('props ', props);

  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button title="Go to Meals!" onPress={() => {
        props.navigation.navigate({routeName: 'CategoryMeals'}); // routeName should be the same as one of keys from MealsNavigator.js

        // same as above
        // props.navigation.push('CategoryMeals');

        // 'replace' => stack will be empty - e.g. (log in screen) After logging in, a user should not be able to go back to the previous log in page
        // props.navigation.replace('CategoryMeals'); 
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

export default CategoriesScreen;