import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  Image,
  Switch,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-crop-picker';

const AddMember = ({navigation}) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [relation, setRelation] = useState('');
  const [place, setPlace] = useState('');
  const [isEnabled, setIsEnabled] = useState(true);
  const [age, setAge] = useState('');
  const [note, setNote] = useState('');

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [dropDownOpen, setdropDownOpen] = useState(false);
  const [sex, setSex] = useState('');
  const [items, setItems] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ]);

  const [isSelectedProfile, setIsSelectedProfile] = useState(false);
  const [imgUrl, setImgUrl] = useState();

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  useEffect(() => {
    navigation.setOptions({
      title: 'Edit Member',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#EE509B',
      },
    });
  }, []);
  const selectProfile = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setImgUrl(image.path);
        setIsSelectedProfile(true);
        console.log(image.path);
        ToastAndroid.show('Image selectied', ToastAndroid.SHORT);
      })
      .catch(error => {
        if (error.toString() == 'Error: User cancelled image selection') {
          setIsSelectedProfile(false);
          ToastAndroid.show('Image selection is cancelled', ToastAndroid.SHORT);
        }
        console.log(error.toString());
      });
  };
  DropDownPicker.setListMode('SCROLLVIEW');
  return (
    <View style={styles.main}>
      <View style={styles.memberImageContainer}>
        <View style={styles.imageBox}>
          {isSelectedProfile == true ? (
            <Image source={{uri: imgUrl}} style={styles.image} />
          ) : (
            <Image
              source={require('../assets/dummyProfile.png')}
              style={styles.image}
            />
          )}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={selectProfile}
            style={styles.profilePickBtn}>
            <FontAwesome5
              style={styles.camera}
              name="plus"
              size={22}
              color={'#fff'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.form}>
        <ScrollView>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            placeholderTextColor={'#a9a9a9'}
          />
          <View style={styles.sexContainer}>
            <DropDownPicker
              open={dropDownOpen}
              value={sex}
              items={items}
              placeholder="Sex"
              // place
              placeholderStyle={{
                opacity: 0.7,
                // paddingHorizontal: 10,
                // color: 'grey',
              }}
              dropDownContainerStyle={{
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: '#EE509B',
                padding: 10,
              }}
              style={styles.input}
              setOpen={setdropDownOpen}
              setValue={setSex}
              setItems={setItems}
            />
          </View>
          <View style={styles.dobContainer}>
            <TextInput
              style={styles.input}
              value={
                date.getFullYear().toString() +
                '-' +
                date.getMonth().toString() +
                '-' +
                date.getDate().toString()
              }
              placeholder="Birth date (YYYY-MM-DD)"
              placeholderTextColor={'#a9a9a9'}
            />
            <TouchableOpacity
              style={styles.inputIcon}
              onPress={() => {
                setOpen(true);
              }}>
              <FontAwesome5 name="calendar-alt" color={'#EE509B'} size={20} />
            </TouchableOpacity>
            <DatePicker
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={date => {
                console.log(date);
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Releation with head of family"
            placeholderTextColor={'#a9a9a9'}
          />
          <TextInput
            style={styles.input}
            placeholder="Place"
            placeholderTextColor={'#a9a9a9'}
          />
          <View style={styles.memberALiveContainer}>
            <Text style={{fontWeight: 'bold'}}>Is the person Alive ? </Text>
            <Switch
              trackColor={{false: '#767577', true: '#81E9AA'}}
              thumbColor={isEnabled ? '#14AC51' : '#000'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Age"
            placeholderTextColor={'#a9a9a9'}
          />
          <TextInput
            style={styles.textarea}
            placeholder="Notes"
            placeholderTextColor={'#a9a9a9'}
            multiline={true}
            numberOfLines={10}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText}>Save changes</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddMember;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#fff'},
  memberImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    width: 130,
    height: 130,
    borderRadius: 90,
    backgroundColor: '#fff',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 90,
  },
  profilePickBtn: {
    backgroundColor: '#EE509B',

    display: 'flex',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 100,
    position: 'absolute',
    top: 80,
    left: 60,
    zIndex: 2000000,
    marginLeft: 40,
    justifyContent: 'center',
    elevation: 10,
  },
  camera: {
    // padding: 5,
  },
  form: {
    flex: 1,
    padding: 10,
  },
  input: {
    color: '#000',
    padding: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#EE509B',
    fontWeight: '400',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  inputIcon: {
    right: 10,
    position: 'absolute',
    padding: 15,
  },
  memberALiveContainer: {
    display: 'flex',
    marginBottom: 20,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
    color: '#000',
    padding: 20,
    paddingVertical: 8,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#EE509B',
    marginBottom: 20,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 170,
    height: 40,
    backgroundColor: '#EE509B',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
