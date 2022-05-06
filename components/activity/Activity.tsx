/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent } from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import activitiesData from '../../assets/data/activitiesData';
import { activityDataType } from '../../types/dataTypes';
import colors from '../../assets/colors/colors';

export const Activity: FunctionComponent = () => {
  const renderActivityItem = ({ item }: { item: activityDataType }) => {
    return (
      <View
        style={[
          styles.activityItemWrapper,
          { marginLeft: item.id === 'activities-1' ? 20 : 0 },
        ]}>
        <Image
          source={item.image as ImageSourcePropType}
          style={styles.activityItemImage}
        />
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.activitiesWrapper}>
      <Text style={styles.activitiesTitle}>Activities</Text>
      <View style={styles.activitesItemsWrapper}>
        <FlatList
          data={activitiesData}
          renderItem={renderActivityItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  activitesItemsWrapper: {
    paddingVertical: 20,
  },
  activityItemWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  activityItemImage: {
    width: 36,
  },
  activityItemText: {
    marginTop: 5,
    fontFamily: 'Lato',
    fontSize: 14,
    color: colors.gray,
  },
});
