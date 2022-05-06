import React, { FunctionComponent } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import discoverCategoriesData from '../../assets/data/discoverCategoriesData';
import colors from '../../assets/colors/colors';

export const DiscoverCategory: FunctionComponent = () => {
  return (
    <View style={styles.discoverCategoriesWrapper}>
      <FlatList
        data={discoverCategoriesData}
        renderItem={({ item }) => {
          return <Text style={styles.discoverCategoryText}>{item.text}</Text>;
        }}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  discoverCategoryText: {
    marginRight: 30,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
  },
});
