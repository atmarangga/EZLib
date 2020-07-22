import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {View} from 'native-base';
import InputBox from '../TextBox';
import {colors} from '../../helpers/constants';
import Text from '../Text';


class PinComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.handlePlaceholder = this.handlePlaceholder.bind(this);
    this.handleLabel = this.handleLabel.bind(this);
  }

  handlePlaceholder() {
    const {placeholder} = this.props;
    return placeholder;
  }

  handleLabel() {
    const {label} = this.props;
    // translate ? handle here !
    return label;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          invert
          allCaps
          isBold
          label={this.handleLabel()}
          style={styles.textStyle}
        />
        <InputBox
          style={styles.inputPinStyle}
          isNumber
          maxLength={this.props.maxLength}
          isAlignCenter
          isHalf
          isPassword
          // placeholder={this.handlePlaceholder()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: 5,
  },
  inputPinStyle: {
    marginRight: 5,
  },
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: colors.backgroundBlue,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    margin: 2,
    padding: 2,
  },
});

PinComponent.propTypes = {
  label: PropTypes.string,
  maxLength: PropTypes.number,
};

PinComponent.defaultProps = {
  label: 'Pin',
  maxLength: 8,
};

export default PinComponent;
