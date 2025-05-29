import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ButtonProps} from './Button.types';
import {buttonStyles} from './Button.styles';

const Button: React.FC<ButtonProps> = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={buttonStyles.mainView}
      hitSlop={buttonStyles.hitSlop}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export {Button};
