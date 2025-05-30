import React from 'react';
import {View, Text} from 'react-native';
import {messageBubbleStyles} from './styles';
import {ChatMessage} from '@/types';

export type MessageBubbleProps = {
  message: ChatMessage;
};

const MessageBubble: React.FC<MessageBubbleProps> = ({message}) => {
  return (
    <View
      style={[
        messageBubbleStyles.mainView,
        message.sender === 'user'
          ? messageBubbleStyles.userBubble
          : messageBubbleStyles.botBubble,
      ]}>
      <Text
        style={[
          messageBubbleStyles.text,
          message.sender === 'user'
            ? messageBubbleStyles.userTextColor
            : messageBubbleStyles.botTextColor,
        ]}>
        {message.text}
      </Text>
      <Text
        style={[
          messageBubbleStyles.timestamp,
          message.sender === 'user'
            ? messageBubbleStyles.userTextColor
            : messageBubbleStyles.botTextColor,
        ]}>
        {message.timestamp.toLocaleString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Text>
    </View>
  );
};
export {MessageBubble};
