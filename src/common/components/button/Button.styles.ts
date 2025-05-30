import {colors} from '@/theme';
import {StyleSheet} from 'react-native';

export const buttonStyles = StyleSheet.create({
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  primary: {
    backgroundColor: colors.primary, // Primary color for the button
  },
  secondary: {
    backgroundColor: colors.secondary, // Secondary color for the button
  },
  tertiary: {
    backgroundColor: colors.accent, // Tertiary color for the button
  },
  ghost: {
    backgroundColor: 'transparent', // Transparent background for ghost button
  },
  link: {
    backgroundColor: 'transparent', // Transparent background for link button
  },
  transparent: {
    backgroundColor: 'transparent', // Transparent background for transparent button
  },
  disabled: {
    backgroundColor: '#D3D3D3', // Light gray for disabled state
  },
  small: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, // Rounded corners for small button
  },
  medium: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, // Rounded corners for medium button
  },
  large: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, // Rounded corners for large button
  },
});
