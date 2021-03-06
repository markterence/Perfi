import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';

const styles = StyleSheet.create({
  root: {
    marginLeft: dimensions.indent * -1.5,
    marginRight: dimensions.indent * -1.5,
  },
  title: {
    color: colors.headerText,
    fontSize: fontSizes.xmedium,
    textAlign: 'center',

  },
  titleLeft: {
    textAlign: 'right',
    letterSpacing: 0,
  },
  titleRight: {
    textAlign: 'left',
    letterSpacing: 1,
  },
});

export default styles;
