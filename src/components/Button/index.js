import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Button, View} from 'native-base';
import Text from '../Text';
import {colors} from '../../helpers/constants';

class CustomButton extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleStyle = this.handleStyle.bind(this);
    this.handleButtonStyle = this.handleButtonStyle.bind(this);
  }

  handleClick() {
    const {onClick} = this.props;
    onClick();
  }

  handleStyle(component) {
    const {isCenter} = this.props;
    if (isCenter) {
      return <View style={styles.centerContainer}>{component}</View>;
    }
    return component;
  }

  handleButtonStyle() {
    const {invert, style, isHalf} = this.props;
    const finalStyle = isHalf ? {...style, ...styles.btnHalf} : style;
    if (invert) {
      return {...styles.btnBorder, ...finalStyle};
    }
    return {...styles.btnMain, ...finalStyle};
  }

  render() {
    const {label, invert} = this.props;
    return this.handleStyle(
      <>
        <Button style={this.handleButtonStyle()} onPress={this.handleClick}>
          <Text isBlue={invert} invert={!invert} label={label} />
        </Button>
      </>,
    );
  }
}

const styles = StyleSheet.create({
  btnMain: {
    margin: 2,
    backgroundColor: colors.backgroundBlue,
    width: 180,
    height: 45,
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnBorder: {
    margin: 2,
    width: 180,
    backgroundColor: colors.backgroundWhite,
    height: 45,
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.backgroundBlue,
  },
  btnHalf: {
    width: 95,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

CustomButton.propTypes = {
  isCenter: PropTypes.bool,
  onClick: PropTypes.func,
  allCaps: PropTypes.bool,
  invert: PropTypes.bool,
  isHalf: PropTypes.bool,
};

CustomButton.defaultProps = {
  isCenter: false,
  allCaps: false,
  invert: false,
  isHalf: false,
  onClick: () => {},
};

export default CustomButton;
