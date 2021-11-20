import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5';
import {TextInput, Button} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
      headerShown: true,
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <ImageBackground
          source={require('../assets/logo.png')}
          style={{height: height / 2.5}}> */}
        <View style={styles.UpperContainer}>
          {/* <FontAwsome5
            name="map-marker-alt"
            size={60}
            style={{color: '#fff'}}
          /> */}
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          {/* <Text style={styles.BrandText}>Brand Name</Text> */}
        </View>
        {/* </ImageBackground> */}
        <View style={styles.bottomContainer}>
          <View style={{padding: 30}}>
            <Text style={styles.WelcomeText}>Forgot Password?</Text>
            <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
              <Text style={styles.RegisterText}>
                Enter your email id and press the button, you will recieve link
                to reset your password
              </Text>
            </View>
            <View style={styles.formContainer}>
              <TextInput
                style={styles.inputContainer}
                activeOutlineColor={'#EE509B'}
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                mode="outlined"
              />

              <View style={styles.loginBtnContainer}>
                <Button
                  style={styles.loginBtn}
                  mode="contained"
                  onPress={() => navigation.replace('HomeScreen')}>
                  Send link
                </Button>
              </View>
              {/* <View style={styles.otherLoginConatiner}>
                <Button
                  style={{width: '20%', borderRadius: 30}}
                  mode="outlined"
                  onPress={() => console.log('Pressed')}>
                  <FontAwsome5 name="google" size={20} color={'#EE509B'} />
                </Button>
                <Button
                  style={{width: '20%', borderRadius: 30}}
                  mode="outlined"
                  onPress={() => console.log('Pressed')}>
                  <FontAwsome5 name="facebook" size={20} color={'#EE509B'} />
                </Button>
                <Button
                  style={{width: '20%', borderRadius: 30}}
                  mode="outlined"
                  onPress={() => console.log('Pressed')}>
                  <FontAwsome5 name="twitter" size={20} color={'#EE509B'} />
                </Button>
              </View> */}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: "center",
    flex: 1,
  },
  UpperContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 2,
  },
  logo: {
    resizeMode: 'contain',
    width: width - 100,
    height: 100,
  },
  BrandText: {
    marginTop: 20,
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomContainer: {
    flexGrow: 1,
    // height: height - height / 3,
    // bottom: 60,
    backgroundColor: '#fff',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  WelcomeText: {
    fontSize: 30,
    color: '#EE509B',
    fontWeight: 'bold',
  },
  RegisterText: {
    fontSize: 15,
    color: '#000',
  },
  RegisterSub: {
    fontSize: 15,
    color: '#6376FD',
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginBtnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: '60%',
    height: 40,
    backgroundColor: '#EE509B',
    borderRadius: 30,
    elevation: 5,
  },
  otherLoginConatiner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
