import React from 'react';
import {View} from 'react-native';
import {headerStyles} from './Header.styles';
import {Button} from '../button';
import IcBack from '../../assets/icons/IcBack.svg'; // Adjust the import path as necessary

const Header: React.FC = () => {
  return (
    <View style={headerStyles.mainView}>
      {/* Header Left-side view */}
      <View style={headerStyles.leftView}>
        <Button>
          <IcBack />
        </Button>
      </View>

      {/* Header content can go here, such as a title or logo */}
      <View style={headerStyles.titleView}>
        <View style={headerStyles.titleText}>AI Chat App</View>
      </View>
      {/* Additional header elements like buttons can be added here */}
    </View>
  );
};

export {Header};
