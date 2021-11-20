import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Cards = [
  {
    id: 1,
    img_url:
      'https://www.investopedia.com/thmb/LF_8TWZPQxdvn6y0DG-bNIZT5Co=/1000x714/filters:fill(auto,1)/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg',
  },
  {
    id: 2,
    img_url:
      'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fcompanies%2Fpaypal_416x416.jpg',
  },
];

const Payment = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Payment methods',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#EE509B',
      },
    });
  }, []);
  return (
    <View style={styles.main}>
      <View style={styles.paymentSliderContainer}>
        <View style={styles.addPayment}>
          <FontAwesome5 name="plus" size={20} color={'#EE509B'} />
        </View>
        <View style={styles.paymentSlider}>
          <ScrollView horizontal={true}>
            {Cards.map(items => {
              console.log(items);
              return (
                <View style={styles.cardImgContainer} key={items.id}>
                  <Image
                    source={{
                      uri: items.img_url,
                    }}
                    style={styles.card_img}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <View style={styles.cardMain}>
        <Text style={styles.cardMainTitle}>Other payment methods</Text>
        <View style={styles.listOtherPaymentMethods}>
          <View style={styles.otherPayment}>
            <Image
              style={styles.paymentCompanyImage}
              source={require('../assets/credit.png')}
            />
            <Text style={styles.paymentTypeName}>Credit / Debit card</Text>
          </View>
          <View style={styles.otherPayment}>
            <Image
              style={styles.paymentCompanyImage}
              source={require('../assets/amzon.png')}
            />
            <Text style={styles.paymentTypeName}>Amazon</Text>
          </View>
          <View style={styles.otherPayment}>
            <Image
              style={styles.paymentCompanyImage}
              source={require('../assets/bhimupi.png')}
            />
            <Text style={styles.paymentTypeName}>Pay through UPI</Text>
          </View>
          <View style={styles.otherPayment}>
            <Image
              style={styles.paymentCompanyImage}
              source={require('../assets/bank.png')}
            />
            <Text style={styles.paymentTypeName}>Bank Transfer</Text>
          </View>
        </View>
      </View>
      <View style={styles.paymentBox}>
        <View style={styles.payNowButton}>
          <Text style={styles.payNowText}>
            Pay Now{'   '}
            <FontAwesome5 name="arrow-right" size={20} color="#EE509B" />
          </Text>
        </View>
        <Text style={styles.amount}>
          <FontAwesome5 name="rupee-sign" size={20} color="#fff" /> 299
        </Text>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#EE509B',
    flex: 1,
  },
  cardMain: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    marginTop: 80,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  paymentSliderContainer: {
    // backgroundColor: '#000',
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    width: '100%',
    paddingLeft: 20,
    height: 80,
  },
  addPayment: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 50,
    height: 100,
    zIndex: 10,
    elevation: 10,
    backgroundColor: '#fff',
  },
  paymentSlider: {
    flex: 1,
    marginTop: -5,
    height: 110,
    zIndex: 100,
    marginLeft: 20,
  },
  cardImgContainer: {
    margin: 5,
    zIndex: 100,
    elevation: 5,
    borderRadius: 10,
    // backgroundColor: '#000',
  },
  card_img: {
    width: 200,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardMainTitle: {
    marginTop: 40,
    fontSize: 20,
    color: '#000',
    opacity: 0.4,
  },
  listOtherPaymentMethods: {
    marginVertical: 30,
  },
  otherPayment: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 15,
  },
  paymentCompanyImage: {
    width: 50,
    resizeMode: 'contain',
    marginRight: 30,
  },
  paymentTypeName: {
    fontSize: 18,
    fontWeight: '500',
  },
  paymentBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#EE509B',
  },
  payNowButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  payNowText: {
    display: 'flex',
    alignItems: 'center',
    color: '#EE509B',
  },
  amount: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
