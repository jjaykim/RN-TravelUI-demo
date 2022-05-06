import React, { FunctionComponent } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../assets/colors/colors';
import { Header } from '../components/header/Header';
import { Discover } from '../components/discover/Discover';
import { NavigationProps } from '../types/navigation';
import { Activity } from '../components/activity/Activity';
import { LearnMore } from '../components/learnMore/LearnMore';

Feather.loadFont();
Entypo.loadFont();

interface HomeProps {
  navigation: NavigationProps;
}

export const Home: FunctionComponent<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <Header />

        {/* Discover */}
        <Discover navigation={navigation} />

        {/* Activites */}
        <Activity />

        {/* Learn More */}
        <LearnMore />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
});
