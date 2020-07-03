import { Platform } from 'react-native';

// import { createStackNavigator, createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';  // need to install
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    // navigationOptions: {
    //   headerTitle: 'Meal Categories' // another way!
    // }
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen
}, {
  // mode: 'modal', // default animation?

  // initialRouteName: 'MealDetail', // initial route setting!

  // This second parameter will apply everywhere (important!)
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
    // headerTitle: 'A Screen' // generic!
  }
});

export default createAppContainer(MealsNavigator);