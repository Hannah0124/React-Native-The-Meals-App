import React from 'react';
import { View, Text } from 'react-native';

const FavoritesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Favorites Screen!</Text>
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

export default FavoritesScreen;