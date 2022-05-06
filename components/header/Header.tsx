import React, { FunctionComponent } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';

import profile from '../../assets/images/person.png';
import colors from '../../assets/colors/colors';

interface HeaderProps {}

Feather.loadFont();

export const Header: FunctionComponent<HeaderProps> = ({}) => {
  return (
    <SafeAreaView>
      <View style={styles.menuWrapper}>
        <Feather name="menu" size={32} color={colors.black} />

        <Image source={profile} style={styles.profileImage} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
});
