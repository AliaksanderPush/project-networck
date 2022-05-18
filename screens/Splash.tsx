import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export const Splash = ():JSX.Element => {
 
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../assets/images/splash.png')}
          />
        </View>
        <View style={styles.logoContainer}>
           <View style={styles.logoTextWrapper}>
            <Image
              style={styles.logo}
              source={require('../assets/images/text.png')}
            />
          </View>
        </View>
      </View>
    );
  }




export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  iconContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginBottom: 30,
  },
  logoTextWrapper: {
    width: '100%',
    height: '30%',
  },
  icon: {
    width: 200,
    height: 200,
  },
  logo: {
    flex: 1,
    alignSelf: 'center',
    height: '100%',
    width: '100%',
  },
  
});