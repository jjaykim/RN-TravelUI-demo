import React, { FunctionComponent } from 'react';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Alert,
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../assets/colors/colors';
import { discoverDataType } from '../types/dataTypes';

type DetailsParamList = {
  DetailItem: { item: discoverDataType };
};

type DetailsRouteProps = RouteProp<DetailsParamList, 'DetailItem'>;
interface DetailsProps {
  route: DetailsRouteProps;
  navigation: NativeStackNavigationProp<ParamListBase>;
}

const height = Dimensions.get('window').height;

export const Details: FunctionComponent<DetailsProps> = ({
  route,
  navigation,
}) => {
  const item = route.params.item;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.imageBig as ImageSourcePropType}
        style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>

        <View style={styles.titlesWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>

          <View style={styles.locationWrapper}>
            <Entypo name="location-pin" size={24} color={colors.white} />

            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo name="heart" size={32} color={colors.orange} />
        </View>

        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>

        <View style={styles.infoWrapper}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>PRICE</Text>

            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>${item.price}</Text>
              <Text style={styles.infoSubText}>/person</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>RATING</Text>

            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.rating}</Text>
              <Text style={styles.infoSubText}>/5</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>DURATION</Text>

            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.duration}</Text>
              <Text style={styles.infoSubText}>/hours</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => Alert.alert('You booked a trip!')}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height * 0.6,
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25,
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 60,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.white,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: colors.white,
    marginLeft: 5,
  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  descriptionTextWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  descriptionTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  descriptionText: {
    marginTop: 20,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.darkGray,
    height: 85,
  },
  infoWrapper: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {},
  infoTitle: {
    fontSize: 12,
    fontFamily: 'Lato-Bold',
    color: colors.gray,
  },
  infoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  infoText: {
    fontSize: 24,
    fontFamily: 'Lato-Bold',
    color: colors.orange,
  },
  infoSubText: {
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: colors.gray,
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 30,
    backgroundColor: colors.orange,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'Lato-Bold',
    color: colors.white,
    fontSize: 18,
  },
});
