import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {replyingIndicatorStyles} from './styles';
import {colors} from '@/theme';

const ReplyingIndicator = () => {
  return (
    <View style={replyingIndicatorStyles.container}>
      <ActivityIndicator size="small" color={colors.primary} />
      <Text style={replyingIndicatorStyles.text}>Just a second...</Text>
    </View>
  );
};
export {ReplyingIndicator};
