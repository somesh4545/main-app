import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Share,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {height, width} = Dimensions.get('window');
const MemberInfo = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Member Information',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#EE509B',
      },
    });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            style={styles.imgProfile}
          />
        </View>
        <Text style={styles.memberName}>UIPRO</Text>
        <View style={styles.personalInfo}>
          <Text style={styles.p_title}>Personal Information</Text>
          <View style={styles.p_container}>
            <View style={styles.p_data}>
              <Text style={styles.p_data_title}>Sex</Text>
              <Text style={styles.p_data_subtitle}>Male</Text>
            </View>
          </View>
        </View>
        <View style={styles.familyInfo}>
          <Text style={styles.p_title}>Spouse</Text>
          <View style={styles.p_container}>
            <View style={styles.p_data}>
              <Text style={styles.p_data_title}>Sex</Text>
              <Text style={styles.p_data_subtitle}>Male</Text>
            </View>
          </View>
          <Text style={styles.p_title}>Children</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MemberInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  imgContainer: {
    borderRadius: 20,
    height: height * 0.4,
    width: width - 20,
    elevation: 10,
    marginBottom: 20,
  },
  imgProfile: {
    borderRadius: 20,
    height: height * 0.4,
    width: width - 20,
    resizeMode: 'cover',
  },
  inforContainer: {
    padding: 10,
  },
  memberName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  personalInfo: {
    padding: 10,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
    margin: 5,
  },
  p_title: {
    fontSize: 20,
  },
  p_container: {
    marginVertical: 10,
  },
  p_data: {
    display: 'flex',
    flexDirection: 'row',
  },
  p_data_title: {
    marginRight: 30,
    fontSize: 14,
    fontWeight: '800',
  },
  p_data_subtitle: {},
  familyInfo: {
    padding: 10,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
    margin: 5,
  },
});
