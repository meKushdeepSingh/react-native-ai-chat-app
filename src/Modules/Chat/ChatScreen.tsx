import React from 'react';
import {View} from 'react-native';
import {chatScreenStyles} from './ChatScreen.styles';
import {Header} from '../../common';

const ChatScreen: React.FC = () => {
  return (
    <View style={chatScreenStyles.MainView}>
      {/* Header component */}
      <Header />

      {/* Chat UI components will go here */}
    </View>
  );
};
export {ChatScreen};
