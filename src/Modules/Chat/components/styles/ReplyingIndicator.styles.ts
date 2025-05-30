import {colors} from '@/theme';
import {StyleSheet} from 'react-native';

export const replyingIndicatorStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10, // Margin around the indicator
    width: '90%', // Width of the indicator
    maxWidth: 400, // Maximum width for larger screens
  },
  text: {
    marginLeft: 10, // Space between the indicator and text
    fontSize: 16, // Font size for the text
    color: colors.textPrimary, // Dark text color for better readability
    fontWeight: '500', // Semi-bold text for emphasis
  },
});
