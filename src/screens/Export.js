import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Export = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Export to PDF',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#EE509B',
      },
    });
  }, []);
  return (
    <View style={styles.main}>
      <View style={styles.downloadContainer}>
        <View style={styles.downloadButton}>
          <FontAwesome5 style={styles.downloadIcon} name="download" />
        </View>
      </View>
      <View style={[styles.cardPrice, {marginVertical: 80}]}>
        <View>
          <Text style={styles.cardTitle}>Free</Text>
          <Text style={{color: '#fff', fontSize: 10}}>7 days free trial</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Try 7 days for free</Text>
        </View>
      </View>
      <View style={styles.cardPrice}>
        <View>
          <Text style={styles.cardTitle}>249/month</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>1 year</Text>
        </View>
      </View>
    </View>
  );
};

export default Export;

const styles = StyleSheet.create({
  main: {
    padding: 20,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  downloadContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 15,
    backgroundColor: '#EE509B',
  },
  downloadIcon: {
    color: 'white',
    fontSize: 30,
  },
  text: {
    color: '#fff',
  },
  cardPrice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EE509B',
    height: 90,
    padding: 15,
    borderRadius: 15,
    elevation: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 15,
    color: 'white',
  },
});
