import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import {AuthContext} from '../components/context';

export function DrawerContent(props) {
  const paperTheme = useTheme();

  // const {signOut, toggleTheme} = React.useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: 'column',
                display: 'flex',
                // alignItems: 'center',
                paddingVertical: 15,
              }}>
              <Avatar.Image
                source={{
                  uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
                size={70}
              />
              <View style={{flexDirection: 'column'}}>
                <Title style={styles.title}>SOmesh Somani</Title>
                <Caption style={styles.caption}>@j_doe</Caption>
              </View>
            </View>

            {/* <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View> */}
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={'#EE509B'} size={size} />
              )}
              label={() => <Text style={{color: '#EE509B'}}>Home</Text>}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  name="info-circle"
                  color={'#EE509B'}
                  size={size}
                />
              )}
              label={() => <Text style={{color: '#EE509B'}}>About Us</Text>}
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  name="hands-helping"
                  color={'#EE509B'}
                  size={size}
                />
              )}
              label={() => <Text style={{color: '#EE509B'}}>Help</Text>}
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="share-alt" color={'#EE509B'} size={size} />
              )}
              label={() => (
                <Text style={{color: '#EE509B'}}>Tell a friend</Text>
              )}
              onPress={() => {
                props.navigation.navigate('BookmarkScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="cog-outline" color={'#EE509B'} size={size} />
              )}
              label={() => <Text style={{color: '#EE509B'}}>Settings</Text>}
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  name="dharmachakra"
                  color={'#EE509B'}
                  size={size}
                />
              )}
              label={() => (
                <Text style={{color: '#EE509B'}}>Quick Support</Text>
              )}
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="comments" color={'#EE509B'} size={size} />
              )}
              label={() => <Text style={{color: '#EE509B'}}>Chat with us</Text>}
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={'#EE509B'} size={size} />
          )}
          label={() => <Text style={{color: '#EE509B'}}>Signout</Text>}
          onPress={() => {
            console.log('out');
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    marginTop: -10,
    paddingLeft: 20,
    paddingVertical: 10,
    backgroundColor: '#f1a2c7',
  },
  title: {
    fontSize: 20,
    marginTop: 3,
    color: '#fff',
    // color: '#EE509B',
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    // color: '#EE509B',
    color: '#fff',
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
