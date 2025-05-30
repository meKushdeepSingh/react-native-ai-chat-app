import {ChatConversation} from '@/types';
import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {MessageBubble} from './MessageBubble';
import {messageListStyles} from './styles';
import {ReplyingIndicator} from './ReplyingIndicator';

export type MessageListProps = {};

const messages: ChatConversation = [
  {
    id: '10',
    text: 'Thank you for your help!',
    sender: 'user',
    timestamp: new Date(),
  },
  {
    id: '9',
    text: 'Got it! Your address has been updated.',
    sender: 'ai',
    timestamp: new Date(),
  },
  {
    id: '8',
    text: 'Sure, it is 123 New Street, Cityville.',
    sender: 'user',
    timestamp: new Date(),
  },
  {
    id: '7',
    text: 'No problem! Please provide the new address.',
    sender: 'ai',
    timestamp: new Date(),
  },
  {
    id: '6',
    text: 'I need to change my shipping address.',
    sender: 'user',
    timestamp: new Date(),
  },
  {
    id: '5',
    text: 'Thank you! Let me check that for you.',
    sender: 'ai',
    timestamp: new Date(),
  },
  {id: '4', text: 'Yes, it is #12345.', sender: 'user', timestamp: new Date()},
  {
    id: '3',
    text: 'Sure! Can you provide your order number?',
    sender: 'ai',
    timestamp: new Date(),
  },
  {
    id: '2',
    text: 'I have a question about my order.',
    sender: 'user',
    timestamp: new Date(),
  },
  {
    id: '1',
    text: 'Hello! How can I help you today?',
    sender: 'ai',
    timestamp: new Date(),
  },
];

const MessageList: FC<MessageListProps> = () => {
  return (
    <View style={messageListStyles.mainView}>
      <FlatList
        inverted={true} // Invert the list to show the latest messages at the bottom
        data={messages}
        renderItem={({item}) => <MessageBubble message={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={messageListStyles.contentContainer}
        showsVerticalScrollIndicator={false}
      />

      <ReplyingIndicator />
    </View>
  );
};
export {MessageList};
