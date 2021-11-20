import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {useNavigation} from '@react-navigation/native';

const LeftNavigation = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <FontAwesome5 name="bars" size={20} color={'#fff'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('share')}>
        <FontAwesome5 name="share-alt" size={20} color={'#fff'} />
      </TouchableOpacity>
    </View>
  );
};

export default LeftNavigation;

const styles = StyleSheet.create({});
