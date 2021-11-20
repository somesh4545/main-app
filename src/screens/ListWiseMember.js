import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Share,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const ListWiseMember = ({navigation}) => {
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
    <View>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome5 name="bars" size={20} color={'#fff'} />
        </TouchableOpacity>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <TouchableOpacity onPress={onShare} style={{marginRight: 30}}>
            <FontAwesome5 name="share-alt" size={20} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Export')}>
            <Image source={require('../assets/export.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <Text>ListWiseMember</Text>
    </View>
  );
};

export default ListWiseMember;

const styles = StyleSheet.create({
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#EE509B',
  },
});
