import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {IPrimaryButton} from './PrimaryButton.props'
import {colors} from '../../../config/Colors';

export const PrimaryButton = ({buttonBg, text, label}:IPrimaryButton):JSX.Element => {
  
    const buttonBackground = buttonBg || colors.primary;
    const textColor = text || colors.secondary;
    const textLabel = label;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: buttonBackground}]}>
          <Text style={[styles.text, {color: textColor}]}>{textLabel}</Text>
        </TouchableOpacity>
      </View>
    );
  
}

export const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    button: {
      backgroundColor: colors.primary,
      padding: 15,
      borderRadius: 5,
    },
    text: {
      color: colors.secondary,
      textAlign: 'center',
    },
  });