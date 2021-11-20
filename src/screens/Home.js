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

import LeftNavigation from './LeftNavigation';
const {height, width} = Dimensions.get('window');

import Canvas from 'react-native-canvas';

const DATA = [
  {id: 1, name: 'Somesh'},
  {id: 2, name: 'Somesh'},
  {id: 3, name: 'somani'},
];

class Node {
  // Node parent;
  // Node children=[];
  constructor(name, img) {
    this.name = name;
    this.img = img;
    this.parent = null;
    this.children = [];
  }
}

class linkList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(name, img) {
    let node = new Node(name, img);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.children.append(node);
      node.parent = this.tail;
      this.children[children.length].children.append(node);
      this.tail = node;
    }
  }
  appendAt(pos, name, img) {
    let current = this.head;
    let counter = 1;
    let node = new Node(name, img);
    if (pos == 0) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      while (current) {
        current = current.next;
        if (counter == pos) {
          node.prev = current.prev;
          current.prev.next = node;
          node.next = current;
          current.prev = node;
        }
        counter++;
      }
    }
  }
}

const Home = ({navigation}) => {
  const [display, Setdisplay] = useState(1);
  const [action, setAction] = useState(false);
  const arr = [1, 2, 3, 4];
  const [total, setTotal] = useState(arr);

  useEffect(() => {
    navigation.setOptions({
      title: 'VanshBook',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#EE509B',
      },
      headerRight: () => (
        <View style={{display: 'flex', flexDirection: 'row', marginRight: 20}}>
          <TouchableOpacity onPress={onShare} style={{marginRight: 30}}>
            <FontAwesome5 name="share-alt" size={20} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Export')}>
            <Image source={require('../assets/export.png')} />
          </TouchableOpacity>
        </View>
      ),
      headerShown: true,
    });
  }, []);

  const addAction = () => {
    setAction(false);
    navigation.navigate('AddMember');
  };

  const WIDTH = 70;
  const HEIGHT = 100;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Hey there this a vanshbook app. Join me',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.card}>
        <View style={styles.tree} activeOpacity={1}>
          {/* {total.map(item => {
            return (
              <TouchableOpacity
                onPress={() =>
                  ToastAndroid.show(item.toString(), ToastAndroid.SHORT)
                }
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#000',
                }}></TouchableOpacity>
            );
          })} */}
          {/* <Image
              style={{resizeMode: 'contain', height: height * 0.6}}
              source={require('../assets/temp.png')}
            /> */}
        </View>
        <View style={styles.paymentContainer}>
          <TouchableOpacity
            style={styles.paymentButton}
            onPress={() => navigation.navigate('Payment')}>
            <Text style={styles.paymentButtonText}>Make Payment</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.bottomButton}>
            <FontAwesome5 name="eye" size={20} color={'#EE509B'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={() => navigation.navigate('FamilyMember')}>
            <FontAwesome5 name="user" size={20} color={'#EE509B'} />
          </TouchableOpacity>
        </View>
      </View>

      {/* bottom tab */}
      <View style={styles.bottomTab}>
        <View style={styles.innerTab}>
          <View style={styles.options}>
            <FontAwesome5 name="th-large" size={20} color={'#767676'} />
          </View>
          <View style={[styles.options, styles.mainIcon]}>
            <MaterialCommunityIcons
              name="home-outline"
              size={25}
              color={'#fff'}
            />
          </View>
          <View style={styles.options}>
            <FontAwesome5 name="money-bill-alt" size={20} color={'#767676'} />
          </View>
        </View>
      </View>
      {action == true ? (
        // chose an action component
        <View style={styles.overlay}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setAction(false)}
            style={styles.remainingPart}></TouchableOpacity>
          <View style={styles.actionContainer}>
            <Text style={styles.actionTitle}>Choose an action</Text>
            <View style={styles.actionCardContainer}>
              <TouchableOpacity
                onPress={() => addAction()}
                style={styles.actionCard}>
                <Image
                  style={styles.actionCardImg}
                  source={require('../assets/action/father.png')}
                />
                <Text style={styles.actionCardTitle}>Add Father</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => addAction()}
                style={styles.actionCard}>
                <Image
                  style={styles.actionCardImg}
                  source={require('../assets/action/mother.png')}
                />
                <Text style={styles.actionCardTitle}>Add mother</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => addAction()}
                style={styles.actionCard}>
                <Image
                  style={styles.actionCardImg}
                  source={require('../assets/action/brother.png')}
                />
                <Text style={styles.actionCardTitle}>Add brother</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => addAction()}
                style={styles.actionCard}>
                <Image
                  style={styles.actionCardImg}
                  source={require('../assets/action/sister.png')}
                />
                <Text style={styles.actionCardTitle}>Add sister</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => addAction()}
                style={styles.actionCard}>
                <Image
                  style={styles.actionCardImg}
                  source={require('../assets/action/son.png')}
                />
                <Text style={styles.actionCardTitle}>Add son</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => addAction()}
                style={styles.actionCard}>
                <Image
                  style={styles.actionCardImg}
                  source={require('../assets/action/daughter.png')}
                />
                <Text style={styles.actionCardTitle}>Add daughter</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => addAction()}
                style={styles.actionCard}>
                <Image
                  style={styles.actionCardImg}
                  source={require('../assets/action/husband.png')}
                />
                <Text style={styles.actionCardTitle}>Add huasband</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => addAction()}
                style={styles.actionCard}>
                <Image
                  style={styles.actionCardImg}
                  source={require('../assets/action/wife.png')}
                />
                <Text style={styles.actionCardTitle}>Add wife</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => addAction()}
                style={styles.actionCard}>
                <Image
                  style={styles.actionCardImg}
                  source={require('../assets/logo.png')}
                />

                {/* <Text style={styles.actionCardTitle}>Add brother</Text> */}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAction(false);
                  navigation.navigate('MemberInfo');
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
              <TouchableOpacity style={styles.actionCard}>
                <MaterialCommunityIcons
                  name="close-circle-outline"
                  color={'#EE509B'}
                  size={50}
                />
                <Text style={styles.actionCardTitle}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#EE509B',
  },
  card: {
    // position: 'absolute',
    flex: 1,
    marginTop: 20,
    bottom: 0,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
  },
  tree: {
    // backgroundColor: '#000',
    // flex: 1,
    height: height * 0.6,
  },
  paymentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 170,
    height: 40,
    backgroundColor: '#EE509B',
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  bottomButtons: {
    padding: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    width: 70,
    height: 70,
    borderRadius: 40,
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
    height: 400,
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
  bottomTab: {
    position: 'absolute',
    zIndex: -10,
    height: 100,
    bottom: 0,
    width: '100%',

    display: 'flex',
  },
  innerTab: {
    height: 60,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#f1a2c7',
  },
  options: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainIcon: {
    zIndex: 100,
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: '#fff',
    backgroundColor: '#EE509B',
    marginBottom: 60,
  },
});
