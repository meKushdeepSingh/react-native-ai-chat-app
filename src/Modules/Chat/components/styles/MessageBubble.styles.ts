import {colors} from '@/theme';
import {StyleSheet} from 'react-native';

export const messageBubbleStyles = StyleSheet.create({
  mainView: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
  },
  text: {
    fontSize: 16, // Font size for the message text
    lineHeight: 20, // Line height for better readability
    flexShrink: 1, // Allow text to wrap and shrink if necessary
    textAlign: 'left', // Align text to the left
    maxWidth: '100%', // Ensure text does not overflow the bubble
  },
  timestamp: {
    fontSize: 12, // Smaller font size for the timestamp
    color: colors.textSecondary, // Gray color for the timestamp
    marginTop: 5, // Space between message text and timestamp
    textAlign: 'right', // Align timestamp to the right
    width: '100%', // Ensure timestamp takes full width
    flexShrink: 1, // Allow timestamp to wrap if necessary
    marginLeft: 10, // Space between message text and timestamp
    marginRight: 10, // Space between message text and timestamp
    marginBottom: 5, // Space below the timestamp
    alignSelf: 'flex-end', // Align timestamp to the end of the bubble
  },
  senderName: {
    fontSize: 14, // Font size for the sender's name
    fontWeight: 'bold', // Bold text for the sender's name
    color: '#000', // Color for the sender's name
    marginBottom: 5, // Space below the sender's name
    textAlign: 'left', // Align sender's name to the left
    width: '100%', // Ensure sender's name takes full width
    flexShrink: 1, // Allow sender's name to wrap if necessary
    marginLeft: 10, // Space between message text and sender's name
    marginRight: 10, // Space between message text and sender's name
    marginTop: 5, // Space above the sender's name
  },
  avatar: {
    width: 30, // Width of the avatar
    height: 30, // Height of the avatar
    borderRadius: 15, // Make the avatar circular
    marginRight: 10, // Space between avatar and message text
    alignSelf: 'flex-start', // Align avatar to the start of the bubble
    backgroundColor: '#b2ebf2', // Placeholder color for the avatar
  },
  userBubble: {
    backgroundColor: colors.primary, // Light green background for user messages
    alignSelf: 'flex-end', // Align user messages to the right
    borderBottomRightRadius: 2,
  },
  botBubble: {
    backgroundColor: colors.white, // Light red background for bot messages
    alignSelf: 'flex-start', // Align bot messages to the left
    borderTopLeftRadius: 2,
  },
  userTextColor: {
    color: colors.textSecondary, // Text color for user messages
  },
  botTextColor: {
    color: colors.textPrimary, // Text color for bot messages
  },
});
