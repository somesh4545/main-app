import React, {useEffect, useState, useRef} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {FontAwesome5} from 'react-native-vector-icons/FontAwesome5';
import Carousel from 'react-native-snap-carousel';
const {width, height} = Dimensions.get('window');

const caroselData = [
  {id: 1, img: require('../assets/c_1.png')},
  {id: 2, img: require('../assets/c_2.png')},
  {id: 2, img: require('../assets/c_2.png')},
];

const Splash = ({navigation}) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide != active) {
      setActive(slide);
    }
  };

  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.container}
        source={require('../assets/bg.png')}
        resizeMode="contain">
        {/* <View>
          <Carousel
            layout={'default'}
            ref={c => {
              carousel = c;
            }}
            data={caroselData}
            renderItem={({item}) => {
              return (
                <View>
                  <Image source={item.img} style={{width: 200, height: 500}} />
                </View>
              );
            }}
            sliderWidth={500}
            itemWidth={300}
          />
        </View> */}
        <View style={{height: 480}}>
          <ScrollView
            horizontal
            showHorizontalScroll={false}
            onScroll={change}
            pagingEnabled={true}>
            <View style={styles.card}>
              <Text style={styles.title}>
                Welcome to create your digital vanshavali
              </Text>
              <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={require('../assets/logo.png')}
                />
              </View>
              <Text style={styles.subtitle}>
                This app helps to create family tree diagram quickly and easily.
                The created family tree shall be shared with others as picture
                or pdf. This app works offline.
              </Text>
            </View>
            <View style={styles.card}>
              <Image
                style={styles.cardImg}
                source={require('../assets/c_2.png')}
              />
            </View>
          </ScrollView>
          <View style={styles.indicators}>
            <Text
              style={active == 0 ? styles.indicatorActive : styles.indicator}>
              ⬤
            </Text>
            <Text
              style={active == 1 ? styles.indicatorActive : styles.indicator}>
              ⬤
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.replace('Login')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 60,
    // backgroundColor: '#ddd',
    height: 450,
  },
  cardImg: {
    resizeMode: 'contain',
    width: width - 80,
    height: 400,
  },
  title: {
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
    // fontSize: '22',
    color: '#F02988',
  },
  logoContainer: {
    marginVertical: 20,
  },
  logo: {
    width: width - 100,
    height: 300,
    resizeMode: 'contain',
  },
  subtitle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '300',
  },
  indicators: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    color: '#888',
    elevation: 10,
    margin: 5,
  },
  indicatorActive: {
    color: '#000',
    elevation: 10,
    margin: 5,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    width: 150,
    height: 45,
    borderRadius: 30,
    backgroundColor: '#EE509B',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
