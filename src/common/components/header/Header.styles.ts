import {StyleSheet} from 'react-native';
import {colors} from '../../../theme';

export const headerStyles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: 60,
    backgroundColor: colors.onPrimary,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
