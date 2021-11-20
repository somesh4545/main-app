import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Share,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
  {id: 1, name: 'Somesh'},
  {id: 2, name: 'Somesh'},
  {id: 3, name: 'somani'},
  {id: 4, name: 'somani'},
  {id: 5, name: 'somani'},
  {id: 6, name: 'somani'},
  {id: 7, name: 'somani'},
  {id: 8, name: 'somani'},
];

const {height, width} = Dimensions.get('window');

const FamilyMember = ({navigation}) => {
  const [action, setAction] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      title: 'Family Members',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#EE509B',
      },
    });
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={[styles.memberList, {paddingBottom: action == true ? 80 : 30}]}>
        <FlatList
          data={DATA}
          renderItem={({item}) => {
            console.log(item);
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.memberCard}
                onPress={() => setAction(true)}>
                <Image
                  style={styles.memberImg}
                  source={{
                    uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                />
                <Text style={styles.memberCardName}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
      {action == true ? (
        <View style={styles.overlay}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setAction(false)}
            style={styles.remainingPart}></TouchableOpacity>
          <View style={styles.actionContainer}>
            <Text style={styles.actionTitle}>Choose an action</Text>
            <View style={styles.actionCardContainer}>
              <TouchableOpacity
                onPress={() => {
                  setAction(false), navigation.navigate('MemberInfo');
                }}
                style={styles.actionCard}>
                <FontAwesome5 name="info-circle" color={'#EE509B'} size={50} />
                <Text style={styles.actionCardTitle}>View INfo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionCard}
                onPress={() => {
                  setAction(false);
                  navigation.navigate('EditMember');
                }}>
                <FontAwesome5 name="edit" color={'#EE509B'} size={50} />
                <Text style={styles.actionCardTitle}>Edit INfo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default FamilyMember;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memberList: {
    paddingVertical: 30,
  },
  memberCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  memberImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 30,
    borderWidth: 3,
    borderColor: '#EE509B',
  },
  memberCardName: {
    fontSize: 20,
    color: '#EE509B',
  },
  overlay: {
    height: '100%',
    width: '100%',
    // zIndex: 100,
    zIndex: 100000000,
    // flex: 1,
    // opacity: 0.7,
    position: 'absolute',
  },
  remainingPart: {
    flexGrow: 1,
    // height: Dimensions.get('window').height - 400,
    backgroundColor: 'rgba(255,255,255,0.5);',
  },
  actionContainer: {
    zIndex: 10000,
    position: 'absolute',
    height: 150,
    bottom: 0,
    width: '100%',
    elevation: 10,
    padding: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: '#fff',
  },
  actionTitle: {
    color: '#EE509B',
    fontSize: 20,
    marginBottom: 15,
  },
  actionCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  actionCard: {
    height: 65,
    width: (Dimensions.get('window').width - 30) / 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginVertical: 10,
    // backgroundColor: '#000',
  },
  actionCardImg: {
    height: 60,
    resizeMode: 'contain',
  },
  actionCardTitle: {
    textTransform: 'capitalize',
    color: '#EE509B',
  },
});
