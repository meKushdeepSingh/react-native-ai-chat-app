import React from 'react';
import {Text, View} from 'react-native';
import {headerStyles} from './Header.styles';
import {Button} from '../button';
import IcBack from '@/assets/icons/IcBack.svg'; // Adjust the import path as necessary
import {colors} from '@/theme';

const Header: React.FC = () => {
  return (
    <View style={headerStyles.mainView}>
      {/* Header Left-side view */}
      <View style={headerStyles.leftView}>
        <Button size="small" variant="transparent" onPress={() => {}}>
          <IcBack height={24} width={24} fill={colors.accent} />
        </Button>
      </View>

      {/* Header content can go here, such as a title or logo */}
      <View style={headerStyles.titleView}>
        <Text style={headerStyles.titleText}>AI Chat App</Text>
      </View>
      {/* Additional header elements like buttons can be added here */}
    </View>
  );
};

export {Header};
