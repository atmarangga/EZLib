import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'native-base';
import {colors} from '../../helpers/constants';

export default class CircleBG extends PureComponent {
  render() {
    const {children} = this.props;

    return (
      <View style={styles.outerContainer}>
        <View style={styles.container} />
        <View style={styles.innerContainer}>{children}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    width: 75,
    height: 60,
    justifyContent: 'center',
  },

  innerContainer: {
    position: 'absolute',
    right: 0,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  container: {
    margin: 2,
    borderRadius: 30,
    width: 55,
    height: 55,
    backgroundColor: colors.backgroundLightBlue,
  },
});
