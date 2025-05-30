import {StyleSheet} from 'react-native';
import {colors} from '../../../theme';

export const headerStyles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: 60,
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftView: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textSecondary,
  },
});
