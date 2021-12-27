import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default function PlaceRouteItem(props) {
  //const {itemId, otherParam} = route.params;

  return (
    <View>
      <Text>Details Screen</Text>
      <Text>{props.route.params.item.title}</Text>
    </View>
  );
}
