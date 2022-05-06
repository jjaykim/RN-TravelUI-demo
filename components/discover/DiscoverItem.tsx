/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent } from 'react';
import {
  FlatList,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import discoverData from '../../assets/data/discoverData';
import { discoverDataType } from '../../types/dataTypes';
import colors from '../../assets/colors/colors';
import { NavigationProps } from '../../types/navigation';

interface DiscoverItemProps {
  navigation: NavigationProps;
}

export const DiscoverItem: FunctionComponent<DiscoverItemProps> = ({
  navigation,
}) => {
  const renderDiscoverItem = ({ item }: { item: discoverDataType }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }>
        <ImageBackground
          source={item.image as ImageSourcePropType}
          style={[
            styles.discoverItem,
            { marginLeft: item.id === 'discover-1' ? 20 : 0 },
          ]}
          imageStyle={styles.discoverItemImage}>
          <Text style={styles.discoverItemTitle}>{item.title}</Text>

          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.discoerItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.discoerItemsWrapper}>
      <FlatList
        data={discoverData}
        renderItem={renderDiscoverItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  discoerItemsWrapper: {
    marginTop: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: 'Lato',
    fontSize: 18,
    color: colors.white,
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discoerItemLocationText: {
    marginLeft: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.white,
  },
});
