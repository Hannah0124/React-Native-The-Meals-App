import React from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Platform  // API
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data'; // array
import Colors from '../constants/Colors';


const CategoriesScreen = props => {
  // console.log('props ', props);

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity 
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      >

        {/* Alternative syntax we could use: */}
        {/* ...navigate('CategoryMeals', {categoryId: YOUR_DATA}) */}


        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };


  return (
    <FlatList 
      // keyExtractor={(item, index) => item.id} // older version needs this!
      data={CATEGORIES} 
      renderItem={renderGridItem} 
      numColumns={2} // how many columns I want
    /> 
  )
};

// Important to update the header!
CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;



{/* <View style={styles.screen}>
  <Text>The Categories Screen!</Text>
  <Button title="Go to Meals!" onPress={() => {
    props.navigation.navigate({routeName: 'CategoryMeals'}); // routeName should be the same as one of keys from MealsNavigator.js

    // same as above
    // props.navigation.push('CategoryMeals');

    // 'replace' => stack will be empty - e.g. (log in screen) After logging in, a user should not be able to go back to the previous log in page
    // props.navigation.replace('CategoryMeals'); 
  }} />
</View>  */}