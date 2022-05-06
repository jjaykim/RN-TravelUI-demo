import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationProps } from '../../types/navigation';

import { DiscoverCategory } from './DiscoverCategory';
import { DiscoverItem } from './DiscoverItem';

interface DiscoverProps {
  navigation: NavigationProps;
}

export const Discover: FunctionComponent<DiscoverProps> = ({ navigation }) => {
  return (
    <View style={styles.discoerWrapper}>
      <Text style={styles.discoverTitle}>Discover</Text>

      <DiscoverCategory />

      <DiscoverItem navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  discoerWrapper: {
    marginTop: 20,
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 32,
  },
});
