import React from 'react';
import {View} from 'react-native';
import {chatScreenStyles} from './ChatScreen.styles';
import {Header} from '@/common';
import {MessageList} from './components';

const ChatScreen: React.FC = () => {
  return (
    <View style={chatScreenStyles.MainView}>
      {/* Header component */}
      <Header />

      {/* Chat UI components will go here */}
      <MessageList />
    </View>
  );
};
export {ChatScreen};
