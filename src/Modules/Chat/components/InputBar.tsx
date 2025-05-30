import React, {FC} from 'react';
import {View, TextInput} from 'react-native';
import {inputBarStyles} from './styles';
import {Button} from '@/common/components/button';
import IcSend from '@/assets/icons/IcSend.svg';
import {colors} from '@/theme';

export type InputBarProps = {};

const InputBar: FC<InputBarProps> = () => {
  return (
    <View style={inputBarStyles.mainView}>
      {/* Input field for typing messages */}
      <TextInput
        style={inputBarStyles.input}
        multiline
        placeholder="Type a message..."
      />

      {/* Spacer between input and button */}
      <View style={inputBarStyles.separator} />

      {/* Send button */}
      <Button variant="tertiary" size="small" onPress={() => {}}>
        <IcSend height={24} width={24} color={colors.primary} />
      </Button>
    </View>
  );
};
export {InputBar};
