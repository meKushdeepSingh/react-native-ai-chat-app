import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ButtonProps} from './Button.types';
import {buttonStyles} from './Button.styles';

const Button: React.FC<ButtonProps> = ({children, onPress, variant, size}) => {
  return (
    <TouchableOpacity
      style={[
        variant ? buttonStyles[variant] : buttonStyles.primary,
        size ? buttonStyles[size] : buttonStyles.medium,
      ]}
      hitSlop={buttonStyles.hitSlop}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export {Button};
