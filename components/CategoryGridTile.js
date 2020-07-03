import React from 'react';
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from 'react-native';

const CategoryGridTitle = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'andoroid' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp 
        style={{flex: 1}}
        onPress={props.onSelect}
      >
        <View style={{ ...styles.container, ...{backgroundColor: props.color}}}>
          <Text 
            style={styles.title}
            numberOfLines={2}
          >
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 3, // for Android
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 21,
    textAlign: 'right'
  }
});

export default CategoryGridTitle;