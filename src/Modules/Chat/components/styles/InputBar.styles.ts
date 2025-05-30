import {colors} from '@/theme';
import {StyleSheet} from 'react-native';

export const inputBarStyles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.secondary, // Light gray background
    borderRadius: 30, // Rounded corners for the input bar
    margin: 10, // Margin around the input bar
  },
  input: {
    flex: 1, // Allow input to take available space
    minHeight: 40, // Min Height of the input field
    maxHeight: 100, // Maximum height for multiline input
    borderRadius: 20, // Rounded corners for the input field
    paddingHorizontal: 15, // Padding inside the input field
    backgroundColor: colors.accent, // White background for the input field
    fontSize: 16, // Font size for the input text
    color: colors.textPrimary, // Dark text color for better readability
  },
  separator: {
    width: 10, // Width of the spacer between input and button
  },
});
